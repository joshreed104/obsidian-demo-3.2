import { config } from 'https://deno.land/x/dotenv/mod.ts';
config({ export: true });
console.log(Deno.env.get('PG_USER'));
