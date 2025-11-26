import { Browser, BrowserContext, Page } from 'playwright';

export interface BrowserInstance {
  id: string;
  browser: Browser;
  context: BrowserContext;
  page: Page;
  createdAt: Date;
  lastUsed: Date;
  isActive: boolean;
  metadata?: {
    name?: string;
    tags?: string[];
    description?: string;
  };
}

export interface ProxyConfig {
  server?: string; // e.g., 'http://127.0.0.1:7890'
  autoDetect?: boolean; // Whether to auto-detect local proxy, defaults to true
}

/** Supported Chrome/Edge channels for using installed browsers */
export type BrowserChannel = 'chrome' | 'chrome-beta' | 'chrome-dev' | 'chrome-canary' | 'msedge' | 'msedge-beta' | 'msedge-dev' | 'msedge-canary';

export interface BrowserConfig {
  browserType: 'chromium' | 'firefox' | 'webkit';
  headless?: boolean;
  viewport?: {
    width: number;
    height: number;
  };
  userAgent?: string;
  proxy?: ProxyConfig;
  /** Use installed browser instead of bundled Playwright browser */
  channel?: BrowserChannel;
  /** Additional browser launch arguments */
  args?: string[];
  /** Array of Playwright default args to ignore (e.g., ['--enable-automation']) */
  ignoreDefaultArgs?: string[];
  contextOptions?: {
    ignoreHTTPSErrors?: boolean;
    bypassCSP?: boolean;
    storageState?: string;
  };
}

export interface ServerConfig {
  maxInstances: number;
  defaultBrowserConfig: BrowserConfig;
  instanceTimeout: number; // in milliseconds
  cleanupInterval: number; // in milliseconds
  proxy?: ProxyConfig; // Global proxy configuration
}

export interface ToolResult {
  success: boolean;
  data?: any;
  error?: string;
  instanceId?: string;
}

export interface NavigationOptions {
  timeout?: number;
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
}

export interface ClickOptions {
  button?: 'left' | 'right' | 'middle';
  clickCount?: number;
  delay?: number;
  timeout?: number;
}

export interface TypeOptions {
  delay?: number;
  timeout?: number;
}

export interface ScreenshotOptions {
  fullPage?: boolean;
  clip?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  type?: 'png' | 'jpeg';
  quality?: number;
} 