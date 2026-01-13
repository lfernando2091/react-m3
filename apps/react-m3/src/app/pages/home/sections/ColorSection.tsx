import {
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import { M3Palette } from '@react-m3/m3';

interface ColorCardProps {
  color: string;
  colorText: string;
  onColor: string;
  onColorText: string;
}

interface ColorCardExtraProps {
  color: string;
  colorText: string;
  onColor: string;
  onColorText: string;

  colorDim: string;
  colorDimText: string;
  onColorDim: string;
  onColorDimText: string;
}

interface ColorCardSmallProps {
  color: string;
  colorText: string;
  onColor: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends M3Palette {
    /* empty */
  }
}

const ColorCard = (props: ColorCardProps) => {
  return <Stack>
    <div style={{
      backgroundColor: props.color,
      color: props.onColor,
      paddingTop: "10px",
      paddingBottom: "20px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}>
      { props.colorText }
    </div>
    <div style={{
      backgroundColor: props.onColor,
      color: props.color,
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}>
      { props.onColorText }
    </div>
  </Stack>
}

const ColorCardExtra = (props: ColorCardExtraProps) => {
  return <Stack>
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container>
        <Grid2 size={6}>
          <div style={{
            backgroundColor: props.color,
            color: props.onColor,
            paddingTop: "10px",
            paddingBottom: "20px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}>

            { props.colorText }
          </div>
        </Grid2>
        <Grid2 size={6}>
          <div style={{
            backgroundColor: props.colorDim,
            color: props.onColorDim,
            paddingTop: "10px",
            paddingBottom: "20px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}>

            { props.colorDimText }
          </div>
        </Grid2>
      </Grid2>
    </Box>
    <div style={{
      backgroundColor: props.onColor,
      color: props.color,
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}>
      { props.onColorText }
    </div>
    <div style={{
      backgroundColor: props.onColorDim,
      color: props.colorDim,
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}>
      { props.onColorDimText }
    </div>
  </Stack>
}

const ColorCardSmall = (props: ColorCardSmallProps) => {
  return <Stack>
    <div style={{
      backgroundColor: props.color,
      color: props.onColor,
      paddingTop: "10px",
      paddingBottom: "20px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}>
      { props.colorText }
    </div>
  </Stack>
}

export const ColorSection = () => {
  const { palette } = useTheme();

  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Colors
      </Typography>
      <Stack direction="row" spacing={2} flexWrap={'wrap'}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={3}>
              <ColorCard
                color={palette.primary.main}
                onColor={palette.onPrimary.main}
                colorText="Primary"
                onColorText="On Primary"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCard
                color={palette.secondary.main}
                onColor={palette.onSecondary.main}
                colorText="Secondary"
                onColorText="On Secondary"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCard
                color={palette.tertiary.main}
                onColor={palette.onTertiary.main}
                colorText="Tertiary"
                onColorText="On Tertiary"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCard
                color={palette.error.main}
                onColor={palette.onError.main}
                colorText="Error"
                onColorText="On Error"
              />
            </Grid2>

            <Grid2 size={3}>
              <ColorCard
                color={palette.primaryContainer.main}
                onColor={palette.onPrimaryContainer.main}
                colorText="Primary Container"
                onColorText="On Primary Container"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCard
                color={palette.secondaryContainer.main}
                onColor={palette.onSecondaryContainer.main}
                colorText="Secondary Container"
                onColorText="On Secondary Container"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCard
                color={palette.tertiaryContainer.main}
                onColor={palette.onTertiaryContainer.main}
                colorText="Tertiary Container"
                onColorText="On Tertiary Container"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCard
                color={palette.errorContainer.main}
                onColor={palette.onErrorContainer.main}
                colorText="Error Container"
                onColorText="On Error Container"
              />
            </Grid2>

            <Grid2 size={3}>
              <ColorCardExtra
                color={palette.primaryFixed.main}
                onColor={palette.onPrimaryFixed.main}
                colorDim={palette.primaryFixedDim.main}
                onColorDim={palette.onPrimaryFixedVariant.main}
                colorText="Primary Fixed"
                onColorText="On Primary Fixed"
                colorDimText="Primary Fixed Dim"
                onColorDimText="On Primary Fixed Variant"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCardExtra
                color={palette.secondaryFixed.main}
                onColor={palette.onSecondaryFixed.main}
                colorDim={palette.secondaryFixedDim.main}
                onColorDim={palette.onSecondaryFixedVariant.main}
                colorText="Secondary Fixed"
                onColorText="On Secondary Fixed"
                colorDimText="Secondary Fixed Dim"
                onColorDimText="On Secondary Fixed Variant"
              />
            </Grid2>
            <Grid2 size={3}>
              <ColorCardExtra
                color={palette.tertiaryFixed.main}
                onColor={palette.onTertiaryFixed.main}
                colorDim={palette.tertiaryFixedDim.main}
                onColorDim={palette.onTertiaryFixedVariant.main}
                colorText="Tertiary Fixed"
                onColorText="On Tertiary Fixed"
                colorDimText="Tertiary Fixed Dim"
                onColorDimText="On Tertiary Fixed Variant"
              />
            </Grid2>
            <Grid2 size={3}/>

            <Grid2 size={9}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid2 container>
                  <Grid2 size={4}>
                    <ColorCardSmall
                      color={palette.surfaceDim.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Dim"
                    />
                  </Grid2>
                  <Grid2 size={4}>
                    <ColorCardSmall
                      color={palette.surface.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface"
                    />
                  </Grid2>
                  <Grid2 size={4}>
                    <ColorCardSmall
                      color={palette.surfaceBright.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Bright"
                    />
                  </Grid2>
                  <Grid2 size={3}>
                    <ColorCardSmall
                      color={palette.surfaceContainerLowest.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Container Lowest"
                    />
                  </Grid2>
                  <Grid2 size={2}>
                    <ColorCardSmall
                      color={palette.surfaceContainerLow.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Container Low"
                    />
                  </Grid2>
                  <Grid2 size={2}>
                    <ColorCardSmall
                      color={palette.surfaceContainer.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Container"
                    />
                  </Grid2>
                  <Grid2 size={2}>
                    <ColorCardSmall
                      color={palette.surfaceContainerHigh.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Container High"
                    />
                  </Grid2>
                  <Grid2 size={3}>
                    <ColorCardSmall
                      color={palette.surfaceContainerHighest.main}
                      onColor={palette.onSurface.main}
                      colorText="Surface Container Highest"
                    />
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={3}>
              <Stack>
                <ColorCardSmall
                  color={palette.inverseSurface.main}
                  onColor={palette.inverseOnSurface.main}
                  colorText="Inverse Surface"
                />
                <ColorCardSmall
                  color={palette.inverseOnSurface.main}
                  onColor={palette.inverseSurface.main}
                  colorText="Inverse On Surface"
                />
                <ColorCardSmall
                  color={palette.inversePrimary.main}
                  onColor={palette.inverseOnPrimary.main}
                  colorText="Inverse Primary"
                />
              </Stack>
              <Box sx={{ flexGrow: 1 }}>
              </Box>
            </Grid2>

            <Grid2 size={9}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid2 container>
                  <Grid2 size={3}>
                    <ColorCardSmall
                      color={palette.onSurface.main}
                      onColor={palette.surface.main}
                      colorText="On Surface"
                    />
                  </Grid2>
                  <Grid2 size={3}>
                    <ColorCardSmall
                      color={palette.onSurfaceVariant.main}
                      onColor={palette.surface.main}
                      colorText="On Surface Variant"
                    />
                  </Grid2>
                  <Grid2 size={3}>
                    <ColorCardSmall
                      color={palette.outline.main}
                      onColor={palette.surface.main}
                      colorText="Outline"
                    />
                  </Grid2>
                  <Grid2 size={3}>
                    <ColorCardSmall
                      color={palette.outlineVariant.main}
                      onColor={palette.onSurface.main}
                      colorText="Outline Variant"
                    />
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={3}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid2 container spacing={1}>
                  <Grid2 size={6}>
                    <ColorCardSmall
                      color={palette.scrim.main}
                      onColor={palette.onSurface.main}
                      colorText="Scrim"
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <ColorCardSmall
                      color={palette.shadow.main}
                      onColor={palette.onSurface.main}
                      colorText="Shadow"
                    />
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>

            <Grid2 size={6}>
              <ColorCardSmall
                color={palette.surfaceTintColor.main}
                onColor={palette.surface.main}
                colorText="Surface Tint Color"
              />
            </Grid2>
            <Grid2 size={6}>
              <ColorCardSmall
                color={palette.onBackground.main}
                onColor={palette.surface.main}
                colorText="On Background"
              />
            </Grid2>
          </Grid2>
        </Box>
      </Stack>
    </Stack>
  );
}
