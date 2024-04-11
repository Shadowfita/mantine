(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82838],{28167:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/css-variables",function(){return a(9829)}])},9829:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return x}});var i=a(52322),r=a(45392),o=a(89885);a(2784);var l=a(96242),Text=a(8582),t=a(45909),s=a(35154),d=a.n(s);function c(e){let{data:n}=e,a=n.map((e,a)=>"group"in e?(0,i.jsx)(l.i.Tr,{children:(0,i.jsx)(l.i.Td,{colSpan:2,className:d().groupCell,children:(0,i.jsx)(Text.x,{fz:"sm",lh:1,fw:500,children:e.group})})},e.group):(0,i.jsxs)(l.i.Tr,{children:[(0,i.jsxs)(l.i.Td,{pb:n[a+1]&&"group"in n[a+1]?"xl":void 0,pt:n[a-1]&&"group"in n[a-1]?"md":void 0,children:[(0,i.jsx)(t.E,{children:e.variable}),e.description&&(0,i.jsx)(Text.x,{fz:"xs",mt:3,children:e.description})]}),(0,i.jsx)(l.i.Td,{pb:n[a+1]&&"group"in n[a+1]?"xl":void 0,pt:n[a-1]&&"group"in n[a-1]?"md":void 0,children:e.defaultValue})]},e.variable));return(0,i.jsx)(l.i.ScrollContainer,{minWidth:500,children:(0,i.jsxs)(l.i,{layout:"fixed",children:[(0,i.jsx)(l.i.Thead,{children:(0,i.jsxs)(l.i.Tr,{children:[(0,i.jsx)(l.i.Th,{w:400,children:"Variable"}),(0,i.jsx)(l.i.Th,{children:"Default value"})]})}),(0,i.jsx)(l.i.Tbody,{children:a})]})})}a(37969);var h=a(79016),m=a(33638);let u=(0,h.A)(m.us.CssVariables);function f(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Demo:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mantine-css-variables",children:"Mantine CSS variables"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," exposes all Mantine CSS variables based on the given ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),".\nYou can use these variables in ",(0,i.jsx)(n.a,{href:"/styles/css-modules",children:"CSS"})," files, ",(0,i.jsx)(n.a,{href:"/styles/style",children:"style prop"})," or any other styles.\nNote that not all values are documented on this page, you can find full list of variables on ",(0,i.jsx)(n.a,{href:"/styles/css-variables-list",children:"this page"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"typography-variables",children:"Typography variables"}),"\n",(0,i.jsx)(n.p,{children:"Typography variables control font family, font size, line height, font weight, and other text-related properties\nof all Mantine components."}),"\n",(0,i.jsx)(n.h3,{id:"font-family",children:"Font family"}),"\n",(0,i.jsx)(n.p,{children:"The following CSS variables are used to assign font families to all Mantine components:"}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-font-family",description:"Controls font-family property of most Mantine components",defaultValue:"system sans-serif fonts"},{variable:"--mantine-font-family-monospace",description:"Controls font-family property of code blocks",defaultValue:"system monospace fonts"},{variable:"--mantine-font-family-headings",description:"Controls font-family property of headings",defaultValue:"system sans-serif fonts"}]}),"\n",(0,i.jsxs)(n.p,{children:["You can control these variables in the ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),". Note that if\n",(0,i.jsx)(n.code,{children:"theme.headings.fontFamily"})," is not set, ",(0,i.jsx)(n.code,{children:"--mantine-font-family-headings"})," value\nwill be the same as ",(0,i.jsx)(n.code,{children:"--mantine-font-family"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  // Controls --mantine-font-family\n  fontFamily: 'Arial, sans-serif',\n\n  // Controls --mantine-font-family-monospace\n  fontFamilyMonospace: 'Courier New, monospace',\n\n  headings: {\n    // Controls --mantine-font-family-headings\n    fontFamily: 'Georgia, serif',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use system fonts as a fallback for custom fonts, you can reference ",(0,i.jsx)(n.code,{children:"DEFAULT_THEME"}),"\nvalue instead of defining it manually:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, DEFAULT_THEME } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can reference font family variables in your CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".text {\n  font-family: var(--mantine-font-family);\n}\n\n.code {\n  font-family: var(--mantine-font-family-monospace);\n}\n\n.heading {\n  font-family: var(--mantine-font-family-headings);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And in ",(0,i.jsx)(n.a,{href:"/styles/style-props",children:"ff style prop"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'ff="text"'})," will use ",(0,i.jsx)(n.code,{children:"--mantine-font-family"})," variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'ff="monospace"'})," will use ",(0,i.jsx)(n.code,{children:"--mantine-font-family-monospace"})," variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'ff="heading"'})," will use ",(0,i.jsx)(n.code,{children:"--mantine-font-family-headings"})," variable"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Text ff=\"monospace\">\n      This text uses --mantine-font-family-monospace variable\n    </Text>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"font-size",children:"Font size"}),"\n",(0,i.jsxs)(n.p,{children:["Font size variables are used in most Mantine components to control text size. The\nvariable that is chosen depends on the component and its ",(0,i.jsx)(n.code,{children:"size"})," prop."]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-font-size-xs",defaultValue:"0.75rem (12px)"},{variable:"--mantine-font-size-sm",defaultValue:"0.875rem (14px)"},{variable:"--mantine-font-size-md",defaultValue:"1rem (16px)"},{variable:"--mantine-font-size-lg",defaultValue:"1.125rem (18px)"},{variable:"--mantine-font-size-xl",defaultValue:"1.25rem (20px)"}]}),"\n",(0,i.jsx)(n.p,{children:"You can reference font size variables in CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".demo {\n  font-size: var(--mantine-font-size-md);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And in ",(0,i.jsx)(n.a,{href:"/styles/style-props",children:"fz style prop"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Text fz=\"xl\">\n      This text uses --mantine-font-size-xl variable\n    </Text>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To define custom font sizes, can use ",(0,i.jsx)(n.code,{children:"theme.fontSizes"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  fontSizes: {\n    xs: '0.5rem',\n    sm: '0.75rem',\n    md: '1rem',\n    lg: '1.25rem',\n    xl: '1.5rem',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"theme.fontSizes"})," object is merged with the ",(0,i.jsx)(n.code,{children:"DEFAULT_THEME.fontSizes"})," –\nit is not required to define all values, only those that you want to change."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\n// Changes only xs font size,\n// other values will be taken from the DEFAULT_THEME\nconst theme = createTheme({\n  fontSizes: {\n    xs: '0.5rem',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can add any number of additional font sizes to the ",(0,i.jsx)(n.code,{children:"theme.fontSizes"})," object.\nThese values will be defined as CSS variables in ",(0,i.jsx)(n.code,{children:"--mantine-font-size-{size}"})," format:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  fontSizes: {\n    xxs: '0.125rem',\n    xxl: '2rem',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After defining ",(0,i.jsx)(n.code,{children:"theme.fontSizes"}),", you can reference these variables in your CSS:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".demo {\n  font-size: var(--mantine-font-size-xxs);\n}\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Case conversion"})}),"\n",(0,i.jsxs)(n.p,{children:["Case conversion (camelCase to kebab-case) is not automatically applied to custom font sizes.\nIf you define ",(0,i.jsx)(n.code,{children:"theme.fontSizes"})," with camelCase keys, you need to reference them in camelCase format.\nFor example, if you define ",(0,i.jsx)(n.code,{children:"{ customSize: '1rem' }"}),", you need to reference it as ",(0,i.jsx)(n.code,{children:"--mantine-font-size-customSize"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"line-height",children:"Line height"}),"\n",(0,i.jsxs)(n.p,{children:["Line height variables are used in ",(0,i.jsx)(n.a,{href:"/core/text",children:"Text"})," component. In other components,\nline-height is either calculated based on font size or set to ",(0,i.jsx)(n.code,{children:"--mantine-line-height"}),",\nwhich is an alias for ",(0,i.jsx)(n.code,{children:"--mantine-line-height-md"}),"."]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-line-height",defaultValue:"1.55"},{variable:"--mantine-line-height-xs",defaultValue:"1.4"},{variable:"--mantine-line-height-sm",defaultValue:"1.45"},{variable:"--mantine-line-height-md",defaultValue:"1.55"},{variable:"--mantine-line-height-lg",defaultValue:"1.6"},{variable:"--mantine-line-height-xl",defaultValue:"1.65"}]}),"\n",(0,i.jsx)(n.p,{children:"You can reference line height variables in your CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".demo {\n  line-height: var(--mantine-line-height-md);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And in ",(0,i.jsx)(n.a,{href:"/styles/style-props",children:"lh style prop"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Text lh=\"xl\">\n      This text uses --mantine-line-height-xl variable\n    </Text>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To define custom line heights, you can use ",(0,i.jsx)(n.code,{children:"theme.lineHeights"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  lineHeights: {\n    xs: '1.2',\n    sm: '1.3',\n    md: '1.4',\n    lg: '1.5',\n    xl: '1.6',\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"headings",children:"Headings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"theme.headings"})," controls font-size, line-height, font-weight and text-wrap CSS properties\nof headings in ",(0,i.jsx)(n.a,{href:"/core/title",children:"Title"})," and ",(0,i.jsx)(n.a,{href:"/core/typography-styles-provider",children:"TypographyStylesProvider"})," components."]}),"\n",(0,i.jsx)(c,{data:[{group:"General variables"},{variable:"--mantine-heading-font-weight",description:"Controls font-weight property of all headings if not overridden",defaultValue:"700"},{variable:"--mantine-heading-text-wrap",description:"Controls text-wrap property of all headings",defaultValue:"wrap"},{group:"h1 heading"},{variable:"--mantine-h1-font-size",defaultValue:"2.125rem (34px)"},{variable:"--mantine-h1-line-height",defaultValue:"1.3"},{variable:"--mantine-h1-font-weight",defaultValue:"700"},{group:"h2 heading"},{variable:"--mantine-h2-font-size",defaultValue:"1.625rem (26px)"},{variable:"--mantine-h2-line-height",defaultValue:"1.35"},{variable:"--mantine-h2-font-weight",defaultValue:"700"},{group:"h3 heading"},{variable:"--mantine-h3-font-size",defaultValue:"1.375rem (22px)"},{variable:"--mantine-h3-line-height",defaultValue:"1.4"},{variable:"--mantine-h3-font-weight",defaultValue:"700"},{group:"h4 heading"},{variable:"--mantine-h4-font-size",defaultValue:"1.125rem (18px)"},{variable:"--mantine-h4-line-height",defaultValue:"1.45"},{variable:"--mantine-h4-font-weight",defaultValue:"700"},{group:"h5 heading"},{variable:"--mantine-h5-font-size",defaultValue:"1rem (16px)"},{variable:"--mantine-h5-line-height",defaultValue:"1.5"},{variable:"--mantine-h5-font-weight",defaultValue:"700"},{group:"h6 heading"},{variable:"--mantine-h6-font-size",defaultValue:"0.875rem (14px)"},{variable:"--mantine-h6-line-height",defaultValue:"1.5"},{variable:"--mantine-h6-font-weight",defaultValue:"700"}]}),"\n",(0,i.jsxs)(n.p,{children:["These variables are used in ",(0,i.jsx)(n.a,{href:"/core/title",children:"Title"})," component, ",(0,i.jsx)(n.code,{children:"order"})," prop\ncontrols which heading level to use. For example, ",(0,i.jsx)(n.code,{children:"order={3}"})," Title will use:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--mantine-h3-font-size"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--mantine-h3-line-height"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--mantine-h3-font-weight"})}),"\n"]}),"\n",(0,i.jsx)(a,{data:o.j}),"\n",(0,i.jsx)(n.p,{children:"You can reference heading variables in your CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".h1 {\n  font-size: var(--mantine-h1-font-size);\n  line-height: var(--mantine-h1-line-height);\n  font-weight: var(--mantine-h1-font-weight);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And in ",(0,i.jsx)(n.a,{href:"/styles/style-props",children:"fz and lh style props"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Box fz="h1" lh="h1">\n      This text uses --mantine-h1-* variables\n    </Box>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To change heading styles, can use ",(0,i.jsx)(n.code,{children:"theme.headings"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    sizes: {\n      h1: {\n        fontSize: '2rem',\n        lineHeight: '1.5',\n        fontWeight: '500',\n      },\n      h2: {\n        fontSize: '1.5rem',\n        lineHeight: '1.6',\n        fontWeight: '500',\n      },\n    },\n    // ...\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"theme.headings"})," object is deeply merged with the ",(0,i.jsx)(n.code,{children:"DEFAULT_THEME.headings"})," object –\nit is not required to define all values, only those that you want to change."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\n// Changes only font-size of h1,\n// other values will be taken from the DEFAULT_THEME\nconst theme = createTheme({\n  headings: {\n    sizes: {\n      h1: {\n        fontSize: '2rem',\n      },\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"font-smoothing",children:"Font smoothing"}),"\n",(0,i.jsxs)(n.p,{children:["Font smoothing variables control ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth",children:"-webkit-font-smoothing and moz-osx-font-smoothing"}),"\nCSS properties. These variables are used to make text look better on screens with high pixel density."]}),"\n",(0,i.jsxs)(n.p,{children:["Font smoothing variables are controlled by ",(0,i.jsx)(n.code,{children:"theme.fontSmoothing"})," ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," property, it is ",(0,i.jsx)(n.code,{children:"true"})," by default. If ",(0,i.jsx)(n.code,{children:"theme.fontSmoothing"})," is ",(0,i.jsx)(n.code,{children:"false"}),", both variables will be set to ",(0,i.jsx)(n.code,{children:"unset"}),"."]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-webkit-font-smoothing",description:"Controls -webkit-font-smoothing CSS property",defaultValue:"antialiased"},{variable:"--mantine-moz-font-smoothing",description:"Controls -moz-osx-font-smoothing CSS property",defaultValue:"grayscale"}]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to override font smoothing values, the best way is to disable ",(0,i.jsx)(n.code,{children:"theme.fontSmoothing"})," and set ",(0,i.jsx)(n.a,{href:"/styles/global",children:"global styles"}),"\non the body element:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\n// Disable font smoothing in your theme\nconst theme = createTheme({\n  fontSmoothing: false,\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"// Add global styles to your project with desired font smoothing values\nbody {\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"colors-variables",children:"Colors variables"}),"\n",(0,i.jsxs)(n.p,{children:["Colors variables are controlled by ",(0,i.jsx)(n.code,{children:"theme.colors"})," and ",(0,i.jsx)(n.code,{children:"theme.primaryColor"}),". Each color\ndefined in ",(0,i.jsx)(n.code,{children:"theme.colors"})," object is required to have 10 shades. Theme color can be\nreferenced by its name and shade index, for example, ",(0,i.jsx)(n.code,{children:"--mantine-color-red-6"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can define new colors on the theme object or override existing colors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    demo: [\n      '#FF0000',\n      '#FF3333',\n      '#FF6666',\n      '#FF9999',\n      '#FFCCCC',\n      '#FFEEEE',\n      '#FFFAFA',\n      '#FFF5F5',\n      '#FFF0F0',\n      '#FFEBEB',\n    ],\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The code above will define the following CSS variables:"}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-color-demo-0",defaultValue:"#FF0000"},{variable:"--mantine-color-demo-1",defaultValue:"#FF3333"},{variable:"--mantine-color-demo-2",defaultValue:"#FF6666"},{variable:"--mantine-color-demo-3",defaultValue:"#FF9999"},{variable:"--mantine-color-demo-4",defaultValue:"#FFCCCC"},{variable:"--mantine-color-demo-5",defaultValue:"#FFEEEE"},{variable:"--mantine-color-demo-6",defaultValue:"#FFFAFA"},{variable:"--mantine-color-demo-7",defaultValue:"#FFF5F5"},{variable:"--mantine-color-demo-8",defaultValue:"#FFF0F0"},{variable:"--mantine-color-demo-9",defaultValue:"#FFEBEB"}]}),"\n",(0,i.jsx)(n.h3,{id:"variant-colors",children:"Variant colors"}),"\n",(0,i.jsxs)(n.p,{children:["Some Mantine components like ",(0,i.jsx)(n.a,{href:"/core/button",children:"Button"})," or ",(0,i.jsx)(n.a,{href:"/core/badge",children:"Badge"})," have ",(0,i.jsx)(n.code,{children:"variant"})," prop\nthat in combination with ",(0,i.jsx)(n.code,{children:"color"})," prop controls the component text, background and border colors.\nFor each variant and color, Mantine defines a set of CSS variables that control these colors.\nFor example, for the default ",(0,i.jsx)(n.code,{children:"blue"})," color the following CSS variables are defined:"]}),"\n",(0,i.jsx)(c,{data:[{group:"Filled variant"},{variable:"--mantine-color-blue-filled",description:"Background color of filled variant",defaultValue:"var(--mantine-color-blue-6)"},{variable:"--mantine-color-blue-filled-hover",description:"Background color of filled variant on hover",defaultValue:"var(--mantine-color-blue-7)"},{group:"Light variant"},{variable:"--mantine-color-blue-light",description:"Background color of light variant",defaultValue:"rgba(34, 139, 230, 0.1)"},{variable:"--mantine-color-blue-light-hover",description:"Background color of light variant on hover",defaultValue:"rgba(34, 139, 230, 0.12)"},{variable:"--mantine-color-blue-light-color",description:"Text color of light variant",defaultValue:"var(--mantine-color-blue-6)"},{group:"Outline variant"},{variable:"--mantine-color-blue-outline",description:"Border color of outline variant",defaultValue:"var(--mantine-color-blue-6)"},{variable:"--mantine-color-blue-outline-hover",description:"Border color of outline variant",defaultValue:"rgba(34, 139, 230, 0.05)"}]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you use ",(0,i.jsx)(n.a,{href:"/core/button",children:"Button"})," component the following way:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button color="pink" variant="filled">\n      Filled pink button\n    </Button>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The component will have the following styles:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Background color will be ",(0,i.jsx)(n.code,{children:"var(--mantine-color-pink-filled)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Background color on hover will be ",(0,i.jsx)(n.code,{children:"var(--mantine-color-pink-filled-hover)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Text color will be ",(0,i.jsx)(n.code,{children:"var(--mantine-color-white)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Border color will be ",(0,i.jsx)(n.code,{children:"transparent"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the variables above are not static, they are generated based on the values of\n",(0,i.jsx)(n.code,{children:"theme.colors"})," and ",(0,i.jsx)(n.code,{children:"theme.primaryShade"}),". Additionally, their values are different for\ndark and light color schemes."]}),"\n",(0,i.jsxs)(n.p,{children:["Variant colors variables are used in all components that support ",(0,i.jsx)(n.code,{children:"color"})," prop, for example,\n",(0,i.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,i.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,i.jsx)(n.a,{href:"/core/avatar",children:"Avatar"})," and ",(0,i.jsx)(n.a,{href:"/core/pagination",children:"Pagination"}),".\nColors values that are used by these components are determined by ",(0,i.jsx)(n.code,{children:"cssVariablesResolver"})," described below\nand ",(0,i.jsx)(n.a,{href:"/styles/variants-sizes/#variantcolorresolver",children:"variantColorResolver"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"primary-color-variables",children:"Primary color variables"}),"\n",(0,i.jsxs)(n.p,{children:["Primary color variables are defined by ",(0,i.jsx)(n.code,{children:"theme.primaryColor"})," (which must be a key of ",(0,i.jsx)(n.code,{children:"theme.colors"}),").\nThe following CSS variables are defined for the primary color:"]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-primary-color-{shade}",description:"Shade is 0-9 to reference specific primary color shade",defaultValue:"var(--mantine-color-{primaryColor}-{shade})"},{variable:"--mantine-primary-color-filled",description:"Background color of filled variant",defaultValue:"var(--mantine-color-{primaryColor}-filled)"},{variable:"--mantine-primary-color-filled-hover",description:"Background color of filled variant on hover",defaultValue:"var(--mantine-color-{primaryColor}-filled-hover)"},{variable:"--mantine-primary-color-light",description:"Background color of light variant",defaultValue:"var(--mantine-color-{primaryColor}-light)"},{variable:"--mantine-primary-color-light-hover",description:"Background color of light variant on hover",defaultValue:"var(--mantine-color-{primaryColor}-light-hover)"},{variable:"--mantine-primary-color-light-color",description:"Text color of light variant",defaultValue:"var(--mantine-color-{primaryColor}-light-color)"}]}),"\n",(0,i.jsx)(n.p,{children:"You can reference primary color variables in CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".demo {\n  color: var(--mantine-primary-color-0);\n  background-color: var(--mantine-primary-color-filled);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"other-color-variables",children:"Other color variables"}),"\n",(0,i.jsx)(n.p,{children:"The following colors are used in various Mantine components. Note that default values\nare provided for the light color scheme, dark color scheme values are different."}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-color-white",description:"Value of theme.white",defaultValue:"#fff"},{variable:"--mantine-color-black",description:"Value of theme.black",defaultValue:"#000"},{variable:"--mantine-color-text",description:"Color used for text in the body element",defaultValue:"var(--mantine-color-black)"},{variable:"--mantine-color-body",description:"Body background color",defaultValue:"var(--mantine-color-white)"},{variable:"--mantine-color-error",description:"Color used for error messages and states",defaultValue:"var(--mantine-color-red-6)"},{variable:"--mantine-color-placeholder",description:"Color used for input placeholders",defaultValue:"var(--mantine-color-gray-5)"},{variable:"--mantine-color-dimmed",description:"Color used for dimmed text",defaultValue:"var(--mantine-color-gray-6)"},{variable:"--mantine-color-bright",description:"Color used for bright text",defaultValue:"var(--mantine-color-black)"},{variable:"--mantine-color-anchor",description:"Color used for links",defaultValue:"var(--mantine-primary-color-6)"},{variable:"--mantine-color-default",description:"Background color of default variant",defaultValue:"var(--mantine-color-white)"},{variable:"--mantine-color-default-hover",description:"Background color of default variant on hover",defaultValue:"var(--mantine-color-gray-0)"},{variable:"--mantine-color-default-color",description:"Text color of default variant",defaultValue:"var(--mantine-color-black)"},{variable:"--mantine-color-default-border",description:"Border color of default variant",defaultValue:"var(--mantine-color-gray-4)"}]}),"\n",(0,i.jsx)(n.h2,{id:"spacing-variables",children:"Spacing variables"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"theme.spacing"})," values are used in most Mantine components to control paddings, margins, and other\nspacing-related properties. The following CSS variables are defined based on ",(0,i.jsx)(n.code,{children:"theme.spacing"}),":"]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-spacing-xs",defaultValue:"0.625rem (10px)"},{variable:"--mantine-spacing-sm",defaultValue:"0.75rem (12px)"},{variable:"--mantine-spacing-md",defaultValue:"1rem (16px)"},{variable:"--mantine-spacing-lg",defaultValue:"1.25rem (20px)"},{variable:"--mantine-spacing-xl",defaultValue:"2rem (32px)"}]}),"\n",(0,i.jsxs)(n.p,{children:["To define custom spacing values, use ",(0,i.jsx)(n.code,{children:"theme.spacing"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  spacing: {\n    xs: '0.5rem',\n    sm: '0.75rem',\n    md: '1rem',\n    lg: '1.5rem',\n    xl: '2rem',\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"border-radius-variables",children:"Border radius variables"}),"\n",(0,i.jsxs)(n.p,{children:["Mantine components that support ",(0,i.jsx)(n.code,{children:"radius"})," prop use border radius variables to control border radius.\nThe following CSS variables are defined based on ",(0,i.jsx)(n.code,{children:"theme.radius"}),":"]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-radius-xs",defaultValue:"0.125rem (2px)"},{variable:"--mantine-radius-sm",defaultValue:"0.25rem (4px)"},{variable:"--mantine-radius-md",defaultValue:"0.5rem (8px)"},{variable:"--mantine-radius-lg",defaultValue:"1rem (16px)"},{variable:"--mantine-radius-xl",defaultValue:"2rem (32px)"}]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, ",(0,i.jsx)(n.code,{children:"--mantine-radius-default"})," variable is defined based on ",(0,i.jsx)(n.code,{children:"theme.defaultRadius"}),"\nvalue. If ",(0,i.jsx)(n.code,{children:"radius"})," prop on components is not set explicitly, ",(0,i.jsx)(n.code,{children:"--mantine-radius-default"})," is used instead."]}),"\n",(0,i.jsxs)(n.p,{children:["To define custom border radius values, use ",(0,i.jsx)(n.code,{children:"theme.radius"})," and ",(0,i.jsx)(n.code,{children:"theme.defaultRadius"})," properties:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  defaultRadius: 'sm',\n  radius: {\n    xs: '0.25rem',\n    sm: '0.5rem',\n    md: '1rem',\n    lg: '2rem',\n    xl: '3rem',\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"shadow-variables",children:"Shadow variables"}),"\n",(0,i.jsxs)(n.p,{children:["Shadow variables are used in all Mantine components that support ",(0,i.jsx)(n.code,{children:"shadow"})," prop. The following CSS\nvariables are defined based on ",(0,i.jsx)(n.code,{children:"theme.shadows"}),":"]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-shadow-xs",defaultValue:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)"},{variable:"--mantine-shadow-sm",defaultValue:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 10px 15px -5px, rgba(0, 0, 0, 0.04) 0 7px 7px -5px"},{variable:"--mantine-shadow-md",defaultValue:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 20px 25px -5px, rgba(0, 0, 0, 0.04) 0 10px 10px -5px"},{variable:"--mantine-shadow-lg",defaultValue:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 28px 23px -7px, rgba(0, 0, 0, 0.04) 0 12px 12px -7px"},{variable:"--mantine-shadow-xl",defaultValue:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 36px 28px -7px, rgba(0, 0, 0, 0.04) 0 17px 17px -7px"}]}),"\n",(0,i.jsxs)(n.p,{children:["To define custom shadow values, use ",(0,i.jsx)(n.code,{children:"theme.shadows"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  shadows: {\n    xs: '0 1px 2px rgba(0, 0, 0, 0.1)',\n    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',\n    md: '0 2px 4px rgba(0, 0, 0, 0.1)',\n    lg: '0 4px 8px rgba(0, 0, 0, 0.1)',\n    xl: '0 8px 16px rgba(0, 0, 0, 0.1)',\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"z-index-variables",children:"z-index variables"}),"\n",(0,i.jsxs)(n.p,{children:["z-index variables are defined in ",(0,i.jsx)(n.code,{children:"@mantine/core/styles.css"}),". Unlike other variables,\nz-index variables are not controlled by the theme and are not exposed in the theme object."]}),"\n",(0,i.jsx)(c,{data:[{variable:"--mantine-z-index-app",defaultValue:"100"},{variable:"--mantine-z-index-modal",defaultValue:"200"},{variable:"--mantine-z-index-popover",defaultValue:"300"},{variable:"--mantine-z-index-overlay",defaultValue:"400"},{variable:"--mantine-z-index-max",defaultValue:"9999"}]}),"\n",(0,i.jsx)(n.p,{children:"You can reference z-index variables in CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* Display content above the modal */\n.my-content {\n  z-index: calc(var(--mantine-z-index-modal) + 1);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"And in components by referencing CSS variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      zIndex=\"var(--mantine-z-index-max)\"\n      opened\n      onClose={() => {}}\n    >\n      Modal content\n    </Modal>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"css-variables-resolver",children:"CSS variables resolver"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cssVariablesResolver"})," prop on ",(0,i.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," allows you to\nmodify values of Mantine CSS variables or even add your own variables.\n",(0,i.jsx)(n.code,{children:"cssVariablesResolver"})," is a function that accepts ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," as a single\nargument and returns an object with CSS variables divided into three groups:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variables"})," – variables that do not depend on color scheme"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"light"})," – variables for light color scheme only"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dark"})," – variables for dark color scheme only"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example of adding new CSS variables based on ",(0,i.jsx)(n.code,{children:"theme.other"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {\n  createTheme,\n  CSSVariablesResolver,\n  MantineProvider,\n  rem,\n} from '@mantine/core';\n\nconst themeOverride = createTheme({\n  other: {\n    deepOrangeLight: '#E17900',\n    deepOrangeDark: '#FC8C0C',\n    heroHeight: rem(400),\n  },\n});\n\nconst resolver: CSSVariablesResolver = (theme) => ({\n  variables: {\n    '--mantine-hero-height': theme.other.heroHeight,\n  },\n  light: {\n    '--mantine-color-deep-orange': theme.other.deepOrangeLight,\n  },\n  dark: {\n    '--mantine-color-deep-orange': theme.other.deepOrangeDark,\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={themeOverride}\n      cssVariablesResolver={resolver}\n    >\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then you will be able to use ",(0,i.jsx)(n.code,{children:"--mantine-hero-height"})," and ",(0,i.jsx)(n.code,{children:"--mantine-color-deep-orange"})," variables\nin any part of your application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".hero {\n  height: var(--mantine-hero-height);\n\n  /* background color will automatically change based on color scheme */\n  background-color: var(--mantine-color-deep-orange);\n}\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(u,{...e,children:(0,i.jsx)(f,{...e})})}},35154:function(e){e.exports={groupCell:"CssVariablesGroup_groupCell__7dYlw"}},89885:function(e,n,a){"use strict";a.d(n,{j:function(){return l}});var i=a(2784),r=a(94120);let o=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`,l={type:"code",code:o,component:function(){return i.createElement(i.Fragment,null,i.createElement(r.D,{order:1},"This is h1 title"),i.createElement(r.D,{order:2},"This is h2 title"),i.createElement(r.D,{order:3},"This is h3 title"),i.createElement(r.D,{order:4},"This is h4 title"),i.createElement(r.D,{order:5},"This is h5 title"),i.createElement(r.D,{order:6},"This is h6 title"))}}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=28167)}),_N_E=e.O()}]);