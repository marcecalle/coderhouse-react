// eslint-disable-next-line react/prop-types
export default function CardComp({ children, title }) {
  return (
    <>
      <section style={{ border: '1px solid white', padding: '10px' }}>
        {children}
        <h3>{title}</h3>
      </section>
    </>
  );
}