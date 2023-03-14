import Data from "../data.json";

const Script = () => {
  const persons = Data.persons;
  return (
    <form>
<label></label>



      {/* <div
        style={{
          gap: "1%",
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        {persons.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid blue",
                borderRadius: "5%",
                padding: "1%",
                color: "brown",
              }}
            >
              <h1>{item.name}</h1>
              <h6>{item.age}</h6>
            </div>
          );
        })}
      </div> */}
    </form>
  );
};
export default Script;
