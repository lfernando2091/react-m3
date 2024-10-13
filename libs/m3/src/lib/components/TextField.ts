import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from '@mui/material';

interface M3TextField {
  MuiTextField: {
    defaultProps?: ComponentsProps['MuiTextField'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
    variants?: ComponentsVariants['MuiTextField'];
  }
}

export const getTextField = (theme: Theme): M3TextField => {
  const { palette, motion } = theme;
  return {
    MuiTextField: {
      defaultProps: {

      },
      styleOverrides: {
        root: {
          '&:hover': {
            '& .MuiInputLabel-root': {
              '&.MuiFormLabel-colorPrimary': {
                '&.MuiInputLabel-outlined': {
                  color: palette.onSurface.main,
                },
                '&.Mui-focused': {
                  color: palette.primary.main,
                  '&.Mui-error': {
                    color: palette.error.main
                  }
                },
                '&.Mui-disabled': {
                  color: alpha(palette.onSurface.main, 0.38),
                },
                '&.Mui-error': {
                  color: palette.onErrorContainer.main
                }
              }
            },
            '& .MuiInputBase-root': {
              '&.MuiOutlinedInput-root': {
                '&.MuiInputBase-colorPrimary': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: palette.onSurface.main,
                  },
                },
                '&.Mui-disabled': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(palette.onSurface.main, 0.12),
                  },
                },
                '&.Mui-error': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: palette.onErrorContainer.main
                  },
                }
              }
            }
          },
          '& .MuiInputLabel-root': {
            '&.MuiFormLabel-colorPrimary': {
              '&.MuiInputLabel-outlined': {
                color: palette.onSurfaceVariant.main,
              },
              '&.Mui-focused': {
                color: palette.primary.main
              },
              '&.Mui-disabled': {
                color: alpha(palette.onSurface.main, 0.38),
              },
              '&.Mui-error': {
                color: palette.error.main
              }
            },
          },
          '& .MuiInputBase-root': {
            '&.MuiOutlinedInput-root': {
              '& .MuiInputAdornment-root': {
                color: palette.onSurfaceVariant.main,
              },
              '&.MuiInputBase-colorPrimary': {
                '& .MuiInputBase-input': {
                  color: palette.onSurface.main,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  transition: theme.transitions.create(
                    ['border-width'],
                    {
                      duration: motion.duration.short2,
                      easing: motion.easing.emphasized.default
                    },
                  ),
                  borderColor: palette.outline.main,
                },
                '&.Mui-focused': {
                  '& .MuiInputBase-input': {
                    caretColor: palette.primary.main,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: palette.primary.main,
                    borderWidth: 3,
                  },
                  '&.Mui-error': {
                    '& .MuiInputBase-input': {
                      caretColor: palette.error.main,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: palette.error.main
                    }
                  }
                },
              },
              '&.Mui-disabled': {
                '& .MuiInputAdornment-root': {
                  color: alpha(palette.onSurface.main, 0.38),
                },
                '& .MuiInputBase-input': {
                  color: alpha(palette.onSurface.main, 0.38),
                  '-webkit-text-fill-color': alpha(palette.onSurface.main, 0.38),
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: alpha(palette.onSurface.main, 0.12),
                },
              },
              '&.Mui-error': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: palette.error.main
                },
                '& .MuiInputAdornment-positionEnd': {
                  color: palette.error.main,
                }
              }
            }
          },
          '& .MuiFormHelperText-root': {
            color: palette.onSurfaceVariant.main,
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38),
            },
            '&.Mui-error': {
              color: palette.error.main
            }
          }
        },
      }
    },
  }
}
