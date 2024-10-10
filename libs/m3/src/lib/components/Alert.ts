import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3Alert {
    MuiAlert: {
        defaultProps?: ComponentsProps['MuiAlert'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiAlert'];
        variants?: ComponentsVariants['MuiAlert'];
    }
};

export const getAlert = (theme: Theme): M3Alert => {
    const { palette, shape } = theme;
    return {
        MuiAlert: {
            defaultProps: {
                variant: 'standard'
            },
            styleOverrides: {
              root: {
                  borderRadius: shape.corner.large.all
              },
              standard: {
                  '&.MuiAlert-colorError': {
                    backgroundColor: palette.errorContainer.main,
                    color: palette.onErrorContainer.main,
                    '& .MuiAlertTitle-root': {
                      color: palette.onErrorContainer.main,
                    }
                  },
                  '&.MuiAlert-colorInfo': {
                    backgroundColor: palette.infoContainer.main,
                    color: palette.onInfoContainer.main,
                    '& .MuiAlertTitle-root': {
                      color: palette.onInfoContainer.main,
                    }
                  },
                  '&.MuiAlert-colorWarning': {
                    backgroundColor: palette.warningContainer.main,
                    color: palette.onWarningContainer.main,
                    '& .MuiAlertTitle-root': {
                      color: palette.onWarningContainer.main,
                    }
                  },
                  '&.MuiAlert-colorSuccess': {
                    backgroundColor: palette.successContainer.main,
                    color: palette.onSuccessContainer.main,
                    '& .MuiAlertTitle-root': {
                      color: palette.onSuccessContainer.main,
                    }
                  }
              },
              filled: {
                '&.MuiAlert-colorError': {
                  backgroundColor: palette.error.main,
                  color: palette.onError.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.onError.main,
                  }
                },
                '&.MuiAlert-colorInfo': {
                  backgroundColor: palette.info.main,
                  color: palette.onInfo.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.onInfo.main,
                  }
                },
                '&.MuiAlert-colorWarning': {
                  backgroundColor: palette.warning.main,
                  color: palette.onWarning.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.onWarning.main,
                  }
                },
                '&.MuiAlert-colorSuccess': {
                  backgroundColor: palette.success.main,
                  color: palette.onSuccess.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.onSuccess.main,
                  }
                }
              },
              outlined: {
                '&.MuiAlert-colorError': {
                  color: palette.error.main,
                  borderColor: palette.error.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.error.main,
                  }
                },
                '&.MuiAlert-colorInfo': {
                  color: palette.info.main,
                  borderColor: palette.info.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.info.main,
                  }
                },
                '&.MuiAlert-colorWarning': {
                  color: palette.warning.main,
                  borderColor: palette.warning.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.warning.main,
                  }
                },
                '&.MuiAlert-colorSuccess': {
                  color: palette.success.main,
                  borderColor: palette.success.main,
                  '& .MuiAlertTitle-root': {
                    color: palette.success.main,
                  }
                }
              }
            }
        }
    }
}
