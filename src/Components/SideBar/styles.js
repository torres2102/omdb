import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "6% 0",
  },
  image: {
    width: "60%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
}));
