'use client';

import React, { useState } from 'react';
import { Container, Typography, Box, Grid2, Card, CardContent, Chip, Button, Tabs, Tab, TextField, IconButton, Divider, List, ListItem, ListItemText, Alert, Breadcrumbs, Link, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaSearch, FaCopy, FaCheck, FaCode, FaPlay, FaBook, FaGithub, FaArrowRight, FaDownload } from 'react-icons/fa';
import { MdApi, MdSecurity, MdSpeed, MdIntegrationInstructions } from 'react-icons/md';

const apiEndpoints = [
  {
    category: 'Authentication',
    icon: <MdSecurity size={24} />,
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/auth/login',
        description: 'Authenticate user and get access token',
        status: 'stable',
        parameters: [
          { name: 'email', type: 'string', required: true, description: 'User email address' },
          { name: 'password', type: 'string', required: true, description: 'User password' },
        ],
        response: {
          type: 'object',
          properties: [
            { name: 'accessToken', type: 'string', description: 'JWT access token' },
            { name: 'refreshToken', type: 'string', description: 'JWT refresh token' },
            { name: 'user', type: 'object', description: 'User profile data' },
          ],
        },
        codeExample: `fetch('/api/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
})`,
      },
      {
        method: 'POST',
        path: '/api/v1/auth/refresh',
        description: 'Refresh access token using refresh token',
        status: 'stable',
        parameters: [{ name: 'refreshToken', type: 'string', required: true, description: 'Refresh token' }],
      },
    ],
  },
  {
    category: 'Design System',
    icon: <MdApi size={24} />,
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/design-system/tokens',
        description: 'Get design tokens for a project',
        status: 'stable',
        parameters: [
          { name: 'projectId', type: 'string', required: true, description: 'Project identifier' },
          { name: 'format', type: 'string', required: false, description: 'Output format (css, scss, json)' },
        ],
      },
      {
        method: 'POST',
        path: '/api/v1/design-system/tokens',
        description: 'Upload new design tokens',
        status: 'beta',
        parameters: [
          { name: 'projectId', type: 'string', required: true, description: 'Project identifier' },
          { name: 'tokens', type: 'object', required: true, description: 'Design tokens object' },
        ],
      },
    ],
  },
  {
    category: 'Components',
    icon: <FaCode size={24} />,
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/components',
        description: 'Get available components list',
        status: 'stable',
        parameters: [
          { name: 'category', type: 'string', required: false, description: 'Filter by category' },
          { name: 'status', type: 'string', required: false, description: 'Filter by status' },
        ],
      },
      {
        method: 'GET',
        path: '/api/v1/components/{id}',
        description: 'Get component details',
        status: 'stable',
        parameters: [{ name: 'id', type: 'string', required: true, description: 'Component identifier' }],
      },
    ],
  },
];

const quickStartCode = `import { DesignSystemProvider, Button, Card } from '@your-company/design-system';

function App() {
  return (
    <DesignSystemProvider>
      <Card>
        <Button variant="primary">Hello World</Button>
      </Card>
    </DesignSystemProvider>
  );
}`;

const sdkExamples = [
  {
    language: 'JavaScript',
    code: `import { DesignSystemClient } from '@your-company/sdk';

const client = new DesignSystemClient({
  apiKey: 'your-api-key',
  baseURL: 'https://api.your-company.com/v1'
});

// Get design tokens
const tokens = await client.getTokens('project-id');`,
  },
  {
    language: 'React',
    code: `import { useDesignSystem } from '@your-company/react-sdk';

function MyComponent() {
  const { tokens, components } = useDesignSystem();
  
  return (
    <div style={{ color: tokens.colors.primary }}>
      <Button variant="primary">Click me</Button>
    </div>
  );
}`,
  },
  {
    language: 'Python',
    code: `from your_company_designsystem import DesignSystemClient

client = DesignSystemClient(api_key='your-api-key')
tokens = client.get_tokens(project_id='project-id')`,
  },
];

export default function ApiDocsPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const filteredEndpoints = apiEndpoints
    .map((category) => ({
      ...category,
      endpoints: category.endpoints.filter((endpoint) => endpoint.path.toLowerCase().includes(searchTerm.toLowerCase()) || endpoint.description.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((category) => category.endpoints.length > 0);

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box sx={{ py: 8, background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 3 }}>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/docs">
              Documentation
            </Link>
            <Typography color="text.primary">API Reference</Typography>
          </Breadcrumbs>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              API Documentation
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
              Complete reference for our Design System API. Integrate with any platform and build amazing experiences.
            </Typography>
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card sx={{ textAlign: 'center', p: 3, background: theme.palette.background.paper }}>
                <MdApi size={48} color={theme.palette.primary.main} />
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  RESTful API
                </Typography>
                <Typography color="text.secondary">Standard REST endpoints with JSON responses</Typography>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card sx={{ textAlign: 'center', p: 3, background: theme.palette.background.paper }}>
                <MdSecurity size={48} color={theme.palette.primary.main} />
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Secure
                </Typography>
                <Typography color="text.secondary">OAuth2 authentication and rate limiting</Typography>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card sx={{ textAlign: 'center', p: 3, background: theme.palette.background.paper }}>
                <MdSpeed size={48} color={theme.palette.primary.main} />
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Fast
                </Typography>
                <Typography color="text.secondary">Global CDN with 99.9% uptime guarantee</Typography>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Quick Start Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Quick Start
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Get up and running in 5 minutes with our simple integration guide.
          </Typography>

          <Card sx={{ background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, p: 3 }}>
                <Typography variant="h6" fontWeight="600">
                  Installation & Basic Usage
                </Typography>
              </Box>
              <Box sx={{ p: 3 }}>
                <Box sx={{ background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, p: 3, position: 'relative', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => copyToClipboard(quickStartCode)}>
                    {copiedCode === quickStartCode ? <FaCheck color={theme.palette.success.main} /> : <FaCopy />}
                  </IconButton>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{quickStartCode}</pre>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* API Reference Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h3" fontWeight="bold">
              API Reference
            </Typography>
            <TextField placeholder="Search endpoints..." size="small" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} InputProps={{ startAdornment: <FaSearch style={{ marginRight: 8, color: theme.palette.text.secondary }} /> }} sx={{ width: 300 }} />
          </Box>

          <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="All Endpoints" />
            <Tab label="Authentication" />
            <Tab label="Design System" />
            <Tab label="Components" />
          </Tabs>

          {filteredEndpoints.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                {category.icon}
                <Typography variant="h4" fontWeight="600">
                  {category.category}
                </Typography>
              </Box>

              {category.endpoints.map((endpoint, endpointIndex) => (
                <Card key={endpointIndex} sx={{ mb: 3, background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'start', mb: 3 }}>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Chip label={endpoint.method} color={endpoint.method === 'GET' ? 'success' : endpoint.method === 'POST' ? 'primary' : 'warning'} size="small" />
                          <Typography variant="h6" fontWeight="600" fontFamily="monospace">
                            {endpoint.path}
                          </Typography>
                          <Chip label={endpoint.status} size="small" variant="outlined" />
                        </Box>
                        <Typography color="text.secondary">{endpoint.description}</Typography>
                      </Box>
                    </Box>

                    {endpoint.parameters && (
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          Parameters
                        </Typography>
                        <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                          <thead>
                            <tr>
                              <th style={{ textAlign: 'left', padding: '8px', borderBottom: `1px solid ${theme.palette.divider}` }}>Name</th>
                              <th style={{ textAlign: 'left', padding: '8px', borderBottom: `1px solid ${theme.palette.divider}` }}>Type</th>
                              <th style={{ textAlign: 'left', padding: '8px', borderBottom: `1px solid ${theme.palette.divider}` }}>Required</th>
                              <th style={{ textAlign: 'left', padding: '8px', borderBottom: `1px solid ${theme.palette.divider}` }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex}>
                                <td style={{ padding: '8px', borderBottom: `1px solid ${theme.palette.divider}30` }}>
                                  <code>{param.name}</code>
                                </td>
                                <td style={{ padding: '8px', borderBottom: `1px solid ${theme.palette.divider}30` }}>
                                  <Chip label={param.type} size="small" variant="outlined" />
                                </td>
                                <td style={{ padding: '8px', borderBottom: `1px solid ${theme.palette.divider}30` }}>{param.required ? 'Yes' : 'No'}</td>
                                <td style={{ padding: '8px', borderBottom: `1px solid ${theme.palette.divider}30` }}>{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Box>
                      </Box>
                    )}

                    {endpoint.codeExample && (
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Example
                        </Typography>
                        <Box sx={{ background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, p: 3, position: 'relative', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => copyToClipboard(endpoint.codeExample)}>
                            {copiedCode === endpoint.codeExample ? <FaCheck color={theme.palette.success.main} /> : <FaCopy />}
                          </IconButton>
                          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{endpoint.codeExample}</pre>
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))}
            </Box>
          ))}
        </Box>

        {/* SDK Examples */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            SDK Examples
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Use our official SDKs for easier integration with your favorite programming languages.
          </Typography>

          <Grid2 container spacing={4}>
            {sdkExamples.map((example, index) => (
              <Grid2 key={index} size={{ xs: 12, md: 6 }}>
                <Card sx={{ background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {example.language}
                    </Typography>
                    <Box sx={{ background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5', borderRadius: 1, p: 2, fontFamily: 'monospace', fontSize: '0.8rem', position: 'relative' }}>
                      <IconButton size="small" sx={{ position: 'absolute', top: 4, right: 4 }} onClick={() => copyToClipboard(example.code)}>
                        {copiedCode === example.code ? <FaCheck size={14} /> : <FaCopy size={14} />}
                      </IconButton>
                      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{example.code}</pre>
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Card sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`, border: `1px solid ${theme.palette.divider}`, p: 6 }}>
            <MdIntegrationInstructions size={64} color={theme.palette.primary.main} style={{ marginBottom: 16 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Ready to Integrate?
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 500, margin: '0 auto' }}>
              Start building with our API today. Comprehensive documentation and support included.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" startIcon={<FaPlay />} sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, px: 4, fontWeight: '600' }}>
                Get API Key
              </Button>
              <Button variant="outlined" size="large" startIcon={<FaGithub />} sx={{ px: 4, fontWeight: '600' }}>
                View on GitHub
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
