// material-ui

// // loader style
// const LoaderWrapper = styled("div")(({ theme }) => ({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   zIndex: 2001,
//   width: "100%",
//   "& > * + *": {
//     marginTop: theme.spacing(2),
//   },
// }));

// ==============================|| Loader ||============================== //

const Loader = () => (
  // <LoaderWrapper>
  //   <LinearProgress color="primary" />
  // </LoaderWrapper>
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">loading..</span>
    </div>
  </div>
);

export default Loader;
