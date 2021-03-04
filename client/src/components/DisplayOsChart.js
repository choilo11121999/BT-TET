import { VictoryPie } from "victory";

export const DisplayOsChart = ({ ios, android, iosPer, androidPer }) => {
  return (
    <div>
      <h3 style={{marginLeft: '30px', marginTop: '15px'}}>Device Type</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <svg width={300} height={300}>
          <VictoryPie
            colorScale={ios === 0 && android === 0 ? ["black"] : ["#48c0b0", "#925de2"]}
            standalone={false}
            width={240}
            height={240}
            innerRadius={50}
            data={[
              { x: "i", y: ios === 0 && android === 0 ? 1 : ios },
              { x: "a", y: androidPer },
            ]}
          />
        </svg>
        <div style={{marginTop: '-20px', marginLeft: '20px'}}>
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
