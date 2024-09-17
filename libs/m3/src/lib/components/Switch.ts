import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from "@mui/material";

interface M3Switch {
  MuiSwitch: {
    defaultProps?: ComponentsProps['MuiSwitch'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiSwitch'];
    variants?: ComponentsVariants['MuiSwitch'];
  }
}

export const getSwitch = (theme: Theme): M3Switch => {
  const { palette, motion, elevation } = theme;
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 32,
          padding: 0,
          marginLeft: 12,
          marginRight: 8,
          borderColor: palette.outline.main,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 8,
            transitionDuration: motion.duration.medium2,
            transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            '&:has(svg)': {
              margin: 4,
            },
            '&.Mui-checked': {
              transform: 'translateX(20px)',
              margin: 4,
              '& + .MuiSwitch-track': {
                backgroundColor: palette.primary.main,
                opacity: 1,
                border: 0,
              },
              '& .MuiSwitch-thumb': {
                color: palette.onPrimary.main,
                width: 24,
                height: 24,
              },
              '& svg': {
                padding: 4,
                width: 24,
                height: 24,
                borderRadius: '50%',
                color: palette.onPrimary.main,
                backgroundColor: palette.onPrimary.main,
              },
              '&.Mui-disabled': {
                '& + .MuiSwitch-track': {
                  backgroundColor: alpha(palette.onSurface.main, 0.12),
                },
                '& .MuiSwitch-thumb': {
                  color: palette.surface.main,
                  boxShadow: 'none'
                },
                '& svg': {
                  color: alpha(palette.onSurface.main, 0.38),
                  backgroundColor: palette.surface.main,
                }
              },
              '&.Mui-focusVisible': {
                '& .MuiSwitch-thumb': {
                  color: palette.primaryContainer.main,
                },
                '& + .MuiSwitch-track': {
                  border: `3px solid ${palette.onSurfaceVariant.main}`
                }
              },
            },
            '& svg': {
              padding: 4,
              width: 24,
              height: 24,
              borderRadius: '50%',
              color: palette.surfaceContainerHighest.main,
              backgroundColor: palette.outline.main
            },
            '&.Mui-focusVisible': {
              '& .MuiSwitch-thumb': {
                color: palette.onSurfaceVariant.main,
              },
              '& + .MuiSwitch-track': {
                border: `3px solid ${palette.primary.main}`
              }
            },
            '&.Mui-disabled': {
              '& .MuiSwitch-thumb': {
                color: alpha(palette.onSurface.main, 0.38),
              },
              '& + .MuiSwitch-track': {
                borderColor: alpha(palette.onSurface.main, 0.12),
                backgroundColor: alpha(palette.surfaceVariant.main, 0.12),
                opacity: 1,
              },
              '& svg': {
                color: alpha(palette.surfaceContainerHighest.main, 0.38),
                backgroundColor: alpha(palette.onSurface.main, 0.38)
              }
            }
          },
          '&:hover .MuiSwitch-switchBase': {
            '& .MuiSwitch-thumb': {
              color: palette.onSurfaceVariant.main,
            },
            '& svg': {
              backgroundColor: palette.onSurfaceVariant.main,
            },
            '&.Mui-checked': {
              '& .MuiSwitch-thumb': {
                color: palette.primaryContainer.main,
              },
              '& svg': {
                color: palette.onPrimaryContainer.main,
                backgroundColor: palette.primaryContainer.main,
              },
              '&.Mui-disabled': {
                '& .MuiSwitch-thumb': {
                  color: palette.surface.main,
                },
                '& svg': {
                  color: alpha(palette.onSurface.main, 0.38),
                  backgroundColor: palette.surface.main,
                }
              },
            },
            '&.Mui-disabled': {
              '& .MuiSwitch-thumb': {
                color: alpha(palette.onSurface.main, 0.38),
              },
              '& svg': {
                color: alpha(palette.surfaceContainerHighest.main, 0.38),
                backgroundColor: alpha(palette.onSurface.main, 0.38)
              }
            }
          },
          '&:focus-within .MuiSwitch-switchBase': {
            '& .MuiSwitch-thumb': {
              color: palette.onSurfaceVariant.main,
            },
            '& svg': {
              backgroundColor: palette.onSurfaceVariant.main,
            },
            '&.Mui-checked': {
              '& .MuiSwitch-thumb': {
                color: palette.primaryContainer.main,
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color: alpha(palette.surface.main, 0.8),
              },
              '& svg': {
                color: palette.onPrimaryContainer.main,
                backgroundColor: palette.primaryContainer.main,
              },
            }
          },
          '&:active .MuiSwitch-switchBase': {
            margin: 2,
            '& .MuiSwitch-thumb': {
              color: palette.onSurfaceVariant.main,
              width: 28,
              height: 28
            },
            '& svg': {
              backgroundColor: palette.onSurfaceVariant.main,
              width: 28,
              height: 28
            },
            '&.Mui-checked': {
              '& .MuiSwitch-thumb': {
                color: palette.primaryContainer.main
              },
              '& svg': {
                backgroundColor: palette.primaryContainer.main
              },
              '&.Mui-disabled': {
                margin: 4,
                '& .MuiSwitch-thumb': {
                  color: palette.surface.main,
                  width: 24,
                  height: 24
                }
              }
            },
            '&.Mui-disabled': {
              margin: 8,
              '&:has(svg)': {
                margin: 4,
              },
              '& .MuiSwitch-thumb': {
                width: 16,
                height: 16,
                color: alpha(palette.onSurface.main, 0.38),
              },
              '& svg': {
                width: 24,
                height: 24,
                color: alpha(palette.surfaceContainerHighest.main, 0.38),
                backgroundColor: alpha(palette.onSurface.main, 0.38)
              }
            }
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            color: palette.outline.main,
            width: 16,
            height: 16,
            boxShadow: elevation.level0,
            '&:before': {
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }
          },
          '& .MuiSwitch-track': {
            borderRadius: "9999px",
            border: `2px solid ${palette.outline.main}`,
            backgroundColor: palette.surfaceContainerHighest.main,

            opacity: 1,
            transition: `background-color ${motion.duration.short4}`,
            transitionTimingFunction: motion.easing.linear,
          },
        },
      }
    }
  }
}
