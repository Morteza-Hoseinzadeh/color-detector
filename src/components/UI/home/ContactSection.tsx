'use client';

import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid2, Alert, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoMail, IoLocation, IoCall, IoPaperPlane } from 'react-icons/io5';

export default function ContactSection() {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<any>(null);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus(null), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <IoMail size={24} />,
      title: 'Email Us',
      details: 'info@chromaUI.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <IoCall size={24} />,
      title: 'Call Us',
      details: '+98 (990) 6451-1808',
      description: 'Sun-Fri from 8am to 6pm',
    },
    {
      icon: <IoLocation size={24} />,
      title: 'Visit Us',
      details: 'Tehran, IR',
      description: 'Come say hello at our office',
    },
  ];

  // Custom input styles
  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.light,
          boxShadow: `0 0 0 3px ${theme.palette.primary.main}15`,
        },
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
        transform: 'translateY(-1px)',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
          boxShadow: `0 0 0 4px ${theme.palette.primary.main}20`,
        },
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
      fontWeight: 500,
      '&.Mui-focused': {
        color: theme.palette.primary.main,
        fontWeight: 600,
        transform: 'translate(14px, -9px) scale(0.85)',
      },
      '&.MuiFormLabel-filled': {
        transform: 'translate(14px, -9px) scale(0.85)',
      },
    },
    '& .MuiInputBase-input': {
      color: theme.palette.text.primary,
      padding: '14px 16px',
      fontSize: '1rem',
      fontWeight: 400,
      '&::placeholder': {
        color: theme.palette.text.primary,
        opacity: 0.6,
        fontWeight: 400,
      },
    },
  };

  return (
    <Box sx={{ background: theme.palette.background.default, py: 8 }} id="contact">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography variant="h6" color="text.primary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Have questions about our design system platform? We'd love to hear from you.
          </Typography>
        </Box>

        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            {contactInfo.map((item, index) => {
              const colors = [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.warning.main];

              const color = colors[index] || colors[0];

              return (
                <Card key={index} sx={{ mb: 2, background: theme.palette.background.paper, border: `2px solid ${color}30`, borderLeft: `6px solid ${color}`, borderRadius: '8px 0 0 8px', transition: 'all 0.3s ease', '&:hover': { borderLeftColor: color, transform: 'translateX(4px)' } }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ color: color }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="h6" fontWeight="600" color={color}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" fontWeight="500" color="text.primary">
                        {item.details}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Grid2>

          {/* Contact Form */}
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Card sx={{ background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: 3, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
              <CardContent sx={{ p: 5 }}>
                {submitStatus === 'success' && (
                  <Alert severity="success" sx={{ mb: 4, borderRadius: 2, border: `1px solid ${theme.palette.success.main}20`, background: `${theme.palette.success.main}08`, '& .MuiAlert-icon': { color: theme.palette.success.main } }}>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    Send us a Message
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Fill out the form below and our team will contact you within 24 hours.
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} required variant="outlined" sx={inputStyles} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required variant="outlined" sx={inputStyles} />
                    </Grid2>
                    <Grid2 size={12}>
                      <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} required variant="outlined" sx={inputStyles} />
                    </Grid2>
                    <Grid2 size={12}>
                      <TextField fullWidth label="Your Message" name="message" value={formData.message} onChange={handleChange} required multiline variant="outlined" sx={{ ...inputStyles, '& .MuiInputBase-input': { padding: '16px', minHeight: '120px' }, '& .MuiInputBase-multiline': { alignItems: 'flex-start' } }} />
                    </Grid2>
                    <Grid2 size={12}>
                      <Box sx={{ justifyContent: 'flex-end', pt: 2, display: 'flex' }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<IoPaperPlane />}
                          sx={{
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            padding: '14px 48px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            borderRadius: 2,
                            boxShadow: `0 4px 20px 0 ${theme.palette.primary.main}30`,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': { content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`, transition: 'left 0.5s' },
                            '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 8px 30px 0 ${theme.palette.primary.main}50`, '&::before': { left: '100%' } },
                            '&:active': { transform: 'translateY(-1px)' },
                          }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </Grid2>
                  </Grid2>
                </form>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
