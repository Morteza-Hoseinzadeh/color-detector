'use client';

import React, { useState } from 'react';
import { Container, Typography, Grid2, Card, CardContent, Box, Button, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoMdCheckmark, IoMdStar, IoMdRocket, IoMdBusiness } from 'react-icons/io';

export default function PricingSection() {
  const theme = useTheme();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for individuals and small projects',
      icon: <IoMdStar />,
      color: theme.palette.primary.main,
      features: ['Up to 3 projects', 'Basic color palette', 'Standard typography', 'Community support', '1GB storage', 'Basic export options'],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      description: 'Ideal for freelancers and growing teams',
      icon: <IoMdRocket />,
      color: theme.palette.secondary.main,
      features: ['Unlimited projects', 'Advanced color system', 'Custom typography scales', 'Priority support', '10GB storage', 'AI-powered optimization', 'Team collaboration', 'Advanced export options'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      description: 'For large teams and organizations',
      icon: <IoMdBusiness />,
      color: theme.palette.success.main,
      features: ['Everything in Pro', 'Custom AI models', 'White-label solutions', 'Dedicated support', 'Unlimited storage', 'SAML/SSO integration', 'Advanced analytics', 'Custom deployment', 'API access'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const savings = billingCycle === 'yearly' ? 'Save 20%' : '';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="pricing">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip label="Pricing" color="primary" variant="filled" sx={{ mb: 3, fontWeight: 'bold', fontSize: '0.875rem', height: 32, px: 2 }} />
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
          Choose the plan that works best for your team. All plans include our core features with no hidden fees.
        </Typography>

        {/* Billing Toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, gap: 2 }}>
          <Typography color={billingCycle === 'monthly' ? 'primary' : 'text.secondary'}>Monthly</Typography>
          <Button variant="outlined" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} sx={{ minWidth: 60, height: 30, borderRadius: 15, position: 'relative', background: billingCycle === 'yearly' ? theme.palette.primary.main : 'transparent', border: `1px solid ${theme.palette.primary.main}` }}>
            <Box sx={{ position: 'absolute', left: billingCycle === 'monthly' ? 4 : 'calc(100% - 26px)', width: 22, height: 22, borderRadius: '50%', background: billingCycle === 'monthly' ? theme.palette.primary.main : 'white', transition: 'left 0.3s ease' }} />
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography color={billingCycle === 'yearly' ? 'primary' : 'text.secondary'}>Yearly</Typography>
            {savings && <Chip label={savings} size="small" color="success" variant="outlined" />}
          </Box>
        </Box>
      </Box>

      <Grid2 container spacing={4} alignItems="stretch">
        {plans.map((plan, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: '100%', background: theme.palette.background.paper, border: plan.popular ? `2px solid ${plan.color}` : `1px solid ${theme.palette.divider}`, borderRadius: 4, transition: 'all 0.3s ease', position: 'relative', overflow: 'visible', '&:hover': { transform: 'translateY(-8px)', boxShadow: theme.shadows[8] } }}>
              {plan.popular && <Box sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: plan.color, color: 'white', px: 3, py: 0.5, borderRadius: 2, fontSize: '0.75rem', fontWeight: 'bold' }}>Most Popular</Box>}

              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Plan Header */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: '50%', background: `${plan.color}20`, color: plan.color, fontSize: 28, mb: 2 }}>{plan.icon}</Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plan.description}
                  </Typography>
                </Box>

                {/* Price */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Typography variant="h3" fontWeight="bold" color="primary">
                    ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                    {plan.price.monthly > 0 && (
                      <Typography component="span" variant="h6" color="text.secondary">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </Typography>
                    )}
                  </Typography>
                  {plan.price.monthly === 0 && (
                    <Typography variant="h6" color="text.secondary">
                      Forever free
                    </Typography>
                  )}
                </Box>

                {/* Features List */}
                <List sx={{ mb: 4, flexGrow: 1 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <IoMdCheckmark style={{ color: plan.color }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  ))}
                </List>

                {/* CTA Button */}
                <Button variant={plan.popular ? 'contained' : 'outlined'} fullWidth sx={{ py: 1.5, borderRadius: 3, fontWeight: 'bold', background: plan.popular ? plan.color : 'transparent', borderColor: plan.color, color: plan.popular ? 'white' : plan.color, '&:hover': { background: plan.popular ? `${plan.color}dd` : `${plan.color}10` } }}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Enterprise Note */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="body2" color="text.secondary">
          Need a custom solution?
          <Typography component="span" color="primary" sx={{ textDecoration: 'underline', cursor: 'pointer', mx: '4px' }}>
            Contact our sales team
          </Typography>
          for enterprise-grade features.
        </Typography>
      </Box>
    </Container>
  );
}
