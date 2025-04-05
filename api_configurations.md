hyperbrowser_mcp=hb_4532417c24eb6988e4114337716b

to run it in cursor:
{
  "mcpServers": {
    "hyperbrowser": {
      "command": "npx",
      "args": ["-y", "hyperbrowser-mcp"],
      "env": {
        "HYPERBROWSER_API_KEY": "YOUR-API-KEY"
      }
    }
  }
}



also for installing mcp sever for netlifly deployments:


my api key is: nfp_QyTjNig9BfUae27e85FrRa4yPP6fYiuz9cbb

and the site id should be: e8364cd6-63de-422b-a4a7-8a2df033feff

MCP Servers
MCP.so
Explore
Playground
Feed
User Cases

English


Submit
Sign In
Home
Servers
Netlify MCP Server
Netlify MCP Server
Netlify MCP Server
Created By
Netlify MCP Server
DynamicEndpoints
a month ago
twitter-white sharing buttonreddit-white sharing buttonfacebook-white sharing buttonthreads-white sharing buttonbluesky-white sharing buttonemail-white sharing button
Netlify MCP Server
Overview
Content
Content
Netlify MCP Server
smithery badge

A Model Context Protocol server that provides comprehensive tools for working with Netlify through their CLI. This server enables deploying sites, managing deployments, handling environment variables, DNS settings, serverless functions, forms, plugins, and webhooks.

Netlify Server MCP server
Features
Deploy and manage sites
Configure DNS settings
Deploy serverless functions
Manage form submissions
Handle environment variables
Install and configure plugins
Set up webhook notifications
Comprehensive error handling
Type-safe parameter validation
Installation
Installing via Smithery
To install Netlify MCP Server for Claude Desktop automatically via Smithery:

npx -y @smithery/cli install @DynamicEndpoints/Netlify-MCP-Server --client claude
Manual Installation
Install dependencies:
npm install
Build the server:
npm run build
Install Netlify CLI globally:
npm install -g netlify-cli
Authenticate with Netlify:
netlify login
This will open a browser window for authentication. After authenticating, the CLI will store your token locally.

Configuration
Add to your MCP settings file (location varies by platform):

{
  "mcpServers": {
    "netlify": {
      "command": "node",
      "args": ["path/to/netlify-server/build/index.js"],
      "disabled": false,
      "autoApprove": []
    }
  }
}
Settings file locations:

Windows: %APPDATA%/Windsurf/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
Linux: ~/.config/claude/settings.json
Available Tools
Site Management
deploy-site
Deploy a site to Netlify

{
  "path": "path/to/site",        // Required: Path to the site directory
  "prod": false,                 // Optional: Deploy to production
  "message": "New deployment"    // Optional: Deploy message
}
list-sites
List all Netlify sites

// No parameters required
get-deploy-status
Get deployment status for a site

{
  "siteId": "your-site-id",     // Required: Site ID or name
  "deployId": "deploy-id"       // Optional: Specific deployment ID
}
DNS Management
add-dns-record
Add a DNS record to a site

{
  "siteId": "your-site-id",     // Required: Site ID or name
  "domain": "example.com",      // Required: Domain name
  "type": "A",                  // Required: Record type (A, AAAA, CNAME, MX, TXT, NS)
  "value": "192.0.2.1",        // Required: Record value
  "ttl": 3600                  // Optional: Time to live in seconds
}
Serverless Functions
deploy-function
Deploy a serverless function

{
  "path": "path/to/function",   // Required: Path to the function file
  "name": "my-function",        // Required: Function name
  "runtime": "nodejs"           // Optional: Function runtime
}
Form Management
manage-form
Manage form submissions

{
  "siteId": "your-site-id",     // Required: Site ID or name
  "formId": "form-id",          // Required: Form ID
  "action": "enable"            // Required: Action (enable, disable, delete)
}
Plugin Management
manage-plugin
Manage site plugins

{
  "siteId": "your-site-id",     // Required: Site ID or name
  "pluginId": "plugin-id",      // Required: Plugin ID
  "action": "install",          // Required: Action (install, uninstall, update)
  "config": {                   // Optional: Plugin configuration
    "setting": "value"
  }
}
Environment Variables
set-env-vars
Set environment variables for a site

{
  "siteId": "your-site-id",     // Required: Site ID or name
  "envVars": {                  // Required: Environment variables
    "API_KEY": "your-api-key",
    "DEBUG": "false"
  }
}
Webhook Management
manage-hook
Manage webhook notifications

{
  "siteId": "your-site-id",     // Required: Site ID or name
  "event": "deploy-succeeded",  // Required: Event type
  "url": "https://example.com", // Required: Webhook URL
  "action": "create"            // Required: Action (create, delete, update)
}
Error Handling
The server provides detailed error messages for:

Authentication failures
Invalid site IDs
Deployment failures
Network connectivity issues
Invalid parameter types
DNS configuration errors
Function deployment issues
Plugin installation problems
Webhook configuration errors
Development
To modify the server:

Update source code in src/index.ts
Build with npm run build
Test your changes by deploying a test site
Type Safety
The server uses Zod for runtime type validation of all parameters, ensuring:

Required parameters are provided
Parameters have correct types
Optional parameters are properly handled
Enum values are validated
Complex object structures are verified
Resources
Netlify CLI Documentation
MCP SDK Documentation
Zod Documentation
Netlify Functions Documentation
Netlify Forms Documentation
Netlify DNS Documentation

Recommend Servers
Blender
Blender
BlenderMCP connects Blender to Claude AI through the Model Context Protocol (MCP), allowing Claude to directly interact with and control Blender. This integration enables prompt assisted 3D modeling, scene creation, and manipulation.
Tavily MCP Server 🚀
Tavily MCP Server 🚀
Sequential Thinking
Sequential Thinking
An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process.
y-cli 🚀
y-cli 🚀
A Tiny Terminal Chat App for AI Models with MCP Client Support
Roo Code (prev. Roo Cline)
Roo Code (prev. Roo Cline)
Roo Code (prev. Roo Cline) gives you a whole dev team of AI agents in your code editor.
Baidu Map
Baidu Map
百度地图核心API现已全面兼容MCP协议，是国内首家兼容MCP协议的地图服务商。
AgentQL MCP Server
AgentQL MCP Server
Model Context Protocol server that integrates AgentQL's data extraction capabilities.
Redis
Redis
A Model Context Protocol server that provides access to Redis databases. This server enables LLMs to interact with Redis key-value stores through a set of standardized tools.
Framelink Figma MCP Server
Framelink Figma MCP Server
MCP server to provide Figma layout information to AI coding agents like Cursor
HyperChat
HyperChat
HyperChat is a Chat client that strives for openness, utilizing APIs from various LLMs to achieve the best Chat experience, as well as implementing productivity tools through the MCP protocol.
Time MCP Server
Time MCP Server
A Model Context Protocol server that provides time and timezone conversion capabilities. This server enables LLMs to get current time information and perform timezone conversions using IANA timezone names, with automatic system timezone detection.
Cherry Studio
Cherry Studio
New version of cherry studio is supporting MCP https://github.com/CherryHQ/cherry-studio/releases/tag/v1.1.1
Continue
Continue
⏩ Create, share, and use custom AI code assistants with our open-source IDE extensions and hub of models, rules, prompts, docs, and other building blocks
Y Gui
Y Gui
A web-based graphical interface for AI chat interactions with support for multiple AI models and MCP (Model Context Protocol) servers.
Playwright Mcp
Playwright Mcp
Playwright MCP server
Amap Maps
Amap Maps
高德地图官方 MCP Server
Aws Kb Retrieval Server
Aws Kb Retrieval Server
An MCP server implementation for retrieving information from the AWS Knowledge Base using the Bedrock Agent Runtime.
Firecrawl MCP Server
Firecrawl MCP Server
Official Firecrawl MCP Server - Adds powerful web scraping to Cursor, Claude and any other LLM clients.
Perplexity Ask MCP Server
Perplexity Ask MCP Server
A Model Context Protocol Server connector for Perplexity API, to enable web search without leaving the MCP ecosystem.
Fetch
Fetch
Web content fetching and conversion for efficient LLM usage
MCP Servers
MCP Servers

The largest collection of MCP Servers, featuring Awesome MCP Servers and Claude MCP integration.

Explore

MCP Servers
MCP Clients
MCP Categories
MCP Tags
MCP Posts
Community

Telegram
Discord
Twitter
GitHub
Friends

ThinkAny
HeyBeauty
CopyWeb
Raphael AI
© 2025 • mcp.so All rights reserved.build with ShipAny

Privacy Policy
Terms of Service
facebook-white sharing buttontwitter-white sharing buttonprint-white sharing buttonwhatsapp-white sharing buttonpinterest-white sharing buttonemail-white sharing buttonreddit-white sharing buttonhackernews-white sharing buttonarrow_right sharing button