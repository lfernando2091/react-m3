import {
  alpha,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3TextField {
  MuiTextField: {
    defaultProps?: ComponentsProps['MuiTextField'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
    variants?: ComponentsVariants['MuiTextField'];
  };
}

export const getTextField = (theme: Theme): M3TextField => {
  const { palette, motion } = theme;
  return {
    MuiTextField: {
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
              },
              '&.MuiFilledInput-root': {
                backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHighest.main, palette.onSurface.main),
                '&::before': {
                  borderBottomColor: palette.onSurface.main
                },
                '&.Mui-disabled': {
                  backgroundColor: alpha(palette.onSurface.main, 0.04),
                },
                '&.Mui-error': {
                  '&::before': {
                    borderBottomColor: palette.onErrorContainer.main
                  }
                }
              },
              '&.MuiInput-underline': {
                '&::before': {
                  borderBottomColor: palette.onSurface.main
                },
                '&.Mui-error': {
                  '&::before': {
                     borderBottomColor: palette.onErrorContainer.main
                  }
                }
              }
            }
          },
          '& .MuiInputLabel-root': {
            '&.MuiFormLabel-colorPrimary': {
              '&.MuiInputLabel-outlined': {
                color: palette.onSurfaceVariant.main,
              },
              '&.MuiInputLabel-filled': {
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
            },
            '&.MuiFilledInput-root': {
              backgroundColor: palette.surfaceContainerHighest.main,
              '&::before': {
                transition: theme.transitions.create(
                  ['border-bottom-width'],
                  {
                    duration: motion.duration.short2,
                    easing: motion.easing.emphasized.default
                  },
                ),
                borderBottomColor: palette.onSurfaceVariant.main,
              },
              '& .MuiInputAdornment-root': {
                color: palette.onSurfaceVariant.main,
              },
              '&.Mui-focused': {
                '&::after': {
                  borderBottomWidth: '3px'
                },
                '& .MuiInputBase-input': {
                  caretColor: palette.primary.main,
                },
                '&.Mui-error': {
                  '& .MuiInputBase-input': {
                    caretColor: palette.error.main,
                  },
                  '&::after': {
                    borderBottomColor: palette.error.main,
                  }
                }
              },
              '&.Mui-disabled': {
                backgroundColor: alpha(palette.onSurface.main, 0.04),
                '&::before': {
                  borderBottomColor: alpha(palette.onSurface.main, 0.38),
                  borderBottomStyle: 'solid'
                },
                '& .MuiInputAdornment-root': {
                  color: alpha(palette.onSurface.main, 0.38),
                },
                '& .MuiInputBase-input': {
                  color: alpha(palette.onSurface.main, 0.38),
                  '-webkit-text-fill-color': alpha(palette.onSurface.main, 0.38),
                },
              },
              '&.Mui-error': {
                '& .MuiInputAdornment-positionEnd': {
                  color: palette.error.main,
                }
              }
            },
            '&.MuiInput-underline': {
              '&::before': {
                transition: theme.transitions.create(
                  ['border-bottom-width'],
                  {
                    duration: motion.duration.short2,
                    easing: motion.easing.emphasized.default
                  },
                ),
                borderBottomColor: palette.onSurfaceVariant.main,
              },
              '& .MuiInputAdornment-root': {
                color: palette.onSurfaceVariant.main,
              },
              '&.Mui-focused': {
                '& .MuiInputBase-input': {
                  caretColor: palette.primary.main,
                },
                '&.Mui-error': {
                  '& .MuiInputBase-input': {
                    caretColor: palette.error.main,
                  },
                  '&::after': {
                    borderBottomColor: palette.error.main,
                  }
                },
                '&::after': {
                  borderBottomWidth: '3px'
                }
              },
              '&.Mui-disabled': {
                '&::before': {
                  borderBottomColor: alpha(palette.onSurface.main, 0.38),
                  borderBottomStyle: 'solid'
                },
                '& .MuiInputAdornment-root': {
                  color: alpha(palette.onSurface.main, 0.38),
                },
                '& .MuiInputBase-input': {
                  color: alpha(palette.onSurface.main, 0.38),
                  '-webkit-text-fill-color': alpha(palette.onSurface.main, 0.38),
                },
              },
              '&.Mui-error': {
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
