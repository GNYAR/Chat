export default function TabPanel(props) {
  const { children, value, idPrefix, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${idPrefix}-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
