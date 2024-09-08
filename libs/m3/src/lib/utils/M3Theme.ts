import { createTheme } from '@mui/material/styles';
import { deepmerge } from "@mui/utils";
import { getM3Palette, getMUIComponents, ThemeSchemeDefault } from '@react-m3/m3';

// A custom theme for this app
const lightTheme = createTheme(getM3Palette('light', ThemeSchemeDefault));
export const M3LightThemeDefault = deepmerge(lightTheme, getMUIComponents(lightTheme));

const darkTheme = createTheme(getM3Palette('dark', ThemeSchemeDefault));
export const M3DarkThemeDefault = deepmerge(darkTheme, getMUIComponents(darkTheme));
