'use client';

import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

export default function Sidebar() {
  const [isActive, setIsActive] = useState('zephyr-project');

  const mocks_project = [
    { id: 'abcdefg-1234', title: 'zephyr-project' },
    { id: 'hijklm-5678', title: 'dourna-clinic-project' },
    { id: 'nopqrs-9101', title: 'zichat-project' },
  ];

  const handleProjectClick = (projectTitle: any) => {
    setIsActive(projectTitle);
  };

  return (
    <Box sx={styles.sidebar}>
      <Box color="primary.main">
        <Typography gutterBottom>Recent's</Typography>
        <Divider orientation="horizontal" />
        <Box mt={2}>
          {mocks_project.map((project, index) => {
            const isProjectActive = project.title === isActive;
            return (
              <Box
                key={project.id}
                sx={{
                  ...styles.projects,
                  backgroundColor: isProjectActive ? 'primary.main' : 'background.paper',
                  color: isProjectActive ? 'common.white' : 'text.primary',
                  '&:hover': { backgroundColor: isProjectActive ? 'primary.main' : 'action.hover' },
                }}
                onClick={() => handleProjectClick(project.title)}
                role="button"
                tabIndex={0}
                aria-selected={isProjectActive}
              >
                <IoIosArrowForward style={{ transform: isProjectActive ? 'rotate(90deg)' : 'none' }} />
                <Typography variant="body2" fontWeight="bold">
                  {project.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={1} color="primary.main" sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }} role="button" tabIndex={0}>
        <AiOutlinePlus size={22} />
        <Typography>Add Category</Typography>
      </Box>
    </Box>
  );
}

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '85vh',
    backgroundColor: 'background.paper',
    borderRadius: '16px',
    p: 3,
  },
  projects: {
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    borderRadius: '12px',
    border: '1px solid',
    borderColor: 'primary.main',
    p: '.75rem',
    mb: 2,
    transition: 'background-color 0.2s ease, color 0.2s ease',
  },
};
