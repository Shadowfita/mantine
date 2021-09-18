import { createStyles, getSharedColorScheme } from '@mantine/core';

interface ToolbarButtonStyles {
  noActive: boolean;
}

export default createStyles((theme, { noActive }: ToolbarButtonStyles) => {
  const colors = getSharedColorScheme({ color: theme.primaryColor, variant: 'light', theme });
  return {
    control: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
      borderRadius: 0,

      '&.ql-active': noActive
        ? {}
        : {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? colors.background
                : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? colors.background
                  : theme.colors[theme.primaryColor][0],
            },
          },
    },
  };
});
