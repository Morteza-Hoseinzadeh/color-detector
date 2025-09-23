'use client';

import React from 'react';
import { Container, Typography, Grid2, Card, CardContent, Box, Avatar, Rating } from '@mui/material';
import { useTheme } from '@mui/material';

export default function TestimonialsSection() {
  const theme = useTheme();

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Lead Designer, TechCorp',
      avatar: 'SC',
      content: 'This platform revolutionized our design workflow. We reduced design system setup time by 70% and improved consistency across all products.',
      rating: 5,
      company: 'TechCorp',
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager, StartupXYZ',
      avatar: 'MJ',
      content: 'The AI-powered color optimization alone is worth the price. Our accessibility scores went from 75% to 95% in just one week.',
      rating: 5,
      company: 'StartupXYZ',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Frontend Lead, DesignStudio',
      avatar: 'ER',
      content: 'Finally, a tool that bridges the gap between designers and developers. The code export feature saved us hundreds of hours.',
      rating: 5,
      company: 'DesignStudio',
    },
  ];

  return (
    <Box sx={{ background: theme.palette.background.default, py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
            Loved by Teams Worldwide
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Join thousands of designers and developers who have transformed their workflow with our platform.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: 4, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: theme.shadows[4] } }}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Rating */}
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 3 }} />

                  {/* Testimonial Text */}
                  <Typography variant="body1" color="text.primary" sx={{ mb: 3, flexGrow: 1, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{testimonial.content}"
                  </Typography>

                  {/* Author */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2, width: 48, height: 48 }}>{testimonial.avatar}</Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Stats */}
        <Grid2 container spacing={4} sx={{ mt: 8, textAlign: 'center' }}>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <Typography variant="h3" fontWeight="bold" color="primary">
              10K+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Happy Users
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <Typography variant="h3" fontWeight="bold" color="primary">
              50K+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Projects Created
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <Typography variant="h3" fontWeight="bold" color="primary">
              99%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Satisfaction Rate
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <Typography variant="h3" fontWeight="bold" color="primary">
              24/7
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Support Available
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
