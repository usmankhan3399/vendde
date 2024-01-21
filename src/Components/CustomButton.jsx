// import React from 'react'
// import { Button } from '@mui/material'
// function CustomButton({text,width,padding}) {
//   return (
//     <Button  variant="contained">{text}</Button>
//   )
// }

// // export default CustomButton

// // import { Button } from '@material-ui/core';
// // import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// // const useStyles = makeStyles<Theme>((theme: Theme) => createStyles({
// //   btn: {
// //     padding: '0px',
// //     minWidth: '129px',
// //     height: 30,
// //     borderRadius: '4px',
// //     textTransform: 'capitalize',
// //     border: `2px solid ${theme.palette.text.secondary}`,
// //   },
// //   btnSecondary: {
// //     color: '#fff',
// //     backgroundColor: theme.palette.secondary.main,
// //     borderColor: `${theme.palette.secondary.main}`,

// //     '& :hover': {
// //       color: theme.palette.secondary.main,
// //     },
// //   },
// //   btnPrimary: {
// //     color: '#fff',
// //     backgroundColor: theme.palette.secondary.main,
// //     borderColor: `${theme.palette.secondary.main}`,

// //     '&:hover': {
// //       color: theme.palette.secondary.main,
// //     },
// //   },
// // }));

// // interface Props extends React.ComponentPropsWithoutRef<'button'> {
// //   value?: string | number,
// //   color?: string,
// //   customClass?:string,
// //   onClick?: any,
// //   disabled?: boolean
// // }

// // const CustomButton = ({
// //   value = 'Button',
// //   color,
// //   onClick = () => {},
// //   type,
// //   customClass,
// //   children,
// //   disabled=false
// // }: Props) => {
// //   const classes = useStyles();
// //   return (
// //     <Button
// //       className={`${classes.btn} ${
// //         color === 'secondary' ? classes.btnSecondary : null
// //       } ${customClass || ''}`}
// //       type={type}
// //       onClick={onClick}
// //       disabled={disabled}
// //     >
// //       {value || children || ''}
// //     </Button>
// //   );
// // };

// // export default CustomButton;