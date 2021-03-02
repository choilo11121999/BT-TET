import { VictoryPie } from "victory";

export const Display = ({ ios, android, iosPer, androidPer, loadName }) => {
  return (
    <div>
      <h3>Device Type</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: '250px'
        }}
      >
        <div className={loadName}></div>
        <svg width={400} height={300}>
          <VictoryPie
            colorScale={ios === 0 && android === 0 ? ["black"] : ["cyan", "purple"]}
            standalone={false}
            width={300}
            height={300}
            innerRadius={75}
            data={[
              { x: "i", y: ios === 0 && android === 0 ? 1 : ios },
              { x: "a", y: androidPer },
            ]}
          />
        </svg>
        <div>
          <table>
            <tr>
              <td>
                <span id="ios"></span>iOS:
                <div style={{ marginLeft: "40px", fontSize: "20px" }}>
                  {iosPer}%
                </div>
              </td>
              <td>{ios}</td>
            </tr>
            <tr>
              <td>
                <span id="android"></span>Android:
                <div style={{ marginLeft: "40px", fontSize: "20px" }}>
                  {androidPer}%
                </div>
              </td>
              <td>{android}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
