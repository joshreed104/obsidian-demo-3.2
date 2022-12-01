import React from 'https://jspm.dev/react';
import ReactDOMServer from 'https://jspm.dev/react-dom/server';
import ReactDom from 'https://jspm.dev/react-dom';
import Chart from 'https://jspm.dev/chart';
import { config as dotEnvConfig } from 'https://deno.land/x/dotenv@v1.0.1/mod.ts';

import {
  ObsidianWrapper,
  useObsidian,
  BrowserCache,
} from 'https://deno.land/x/obsidian/clientMod.ts';
// } from '../obsidian/clientMod.ts';

import rsh from 'https://jspm.dev/react-syntax-highlighter';

const realRSH: any = rsh;

const CodeBlock = realRSH.Prism;

export {
  BrowserCache,
  ObsidianWrapper,
  useObsidian,
  React,
  ReactDOMServer,
  ReactDom,
  CodeBlock,
  Chart,
  dotEnvConfig,
};
