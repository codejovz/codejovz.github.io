import { convertToModelMessages, generateText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const incoming = Array.isArray(body) ? body : body?.messages;
    if (!Array.isArray(incoming)) {
      return new Response('Bad Request: expected { messages: [...] }', { status: 400 });
    }

    // Normalize simple messages to the UI `parts` shape expected by convertToModelMessages
    const normalized = incoming.map((m: any) => {
      if (Array.isArray(m.parts)) return m;
      const role = m.role ?? 'user';
      const text = typeof m.content === 'string' ? m.content : m.text ?? '';
      return { ...m, role, parts: [{ type: 'text', text }] };
    });

    // Prepend system prompt unless the client already provided one
    const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT
    const hasSystem = normalized.some((m: any) => m.role === 'system');
    const messagesWithSystem = hasSystem
      ? normalized
      : [{ role: 'system', parts: [{ type: 'text', text: SYSTEM_PROMPT }] }, ...normalized];

    const modelMessages = await convertToModelMessages(messagesWithSystem);

    const { text: response } = await generateText({
      model: 'mistral/ministral-14b',
      messages: modelMessages,
    });

    return new Response(response, { status: 200 });
  } catch (err) {
    console.error('/api/chat error', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}