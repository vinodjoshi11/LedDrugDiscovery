import React  from "react"; 
import { Range, getTrackBackground } from "react-range";
import "./style.css"
const STEP = 1;
const MIN = 0;
const MAX = 100; 
class RangeSlider extends React.Component { 
      state = {
        values: [this.props.value || 0]
      };  
      componentDidUpdate(prevProps){
          if(prevProps.value !== this.props.value){
              this.setState({values:[this.props.value]});
          }
      }
    render() {
      return (
        <div className={`${this.props.isCompound ? "compoundRangeBox" : "range-box"}`}>
          <Range
            values={this.state.values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) =>{ 
              this.setState({ values }) 
              if(this.props.isCompound){
                this.props.onChangeRange(values[0])
              }
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%"
                }}
              > 
                <div
                  ref={props.ref}
                  style={{
                    height: "8px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: [this.state.values[0]===100?"#31ab2f":"#002edb", "#ccc"],
                      min: MIN,
                      max: MAX
                    }),
                    alignSelf: "center"
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "50px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border:`solid 1px ${this.state.values[0]===100?"#31ab2f":"#002edb"}`,
                  boxShadow: "0px 2px 6px #AAA"
                }}
              > 
              </div>
            )}
          />

          {this.props.isCompound ? 

          <div className="sliderValue">
            <div className={"output-value"} style={{color:this.state.values[0]===100?"#31ab2f":"#212121"}} id="output">
                {this.state.values[0]}%
              </div>  
              <div className={"output-value"}>100%</div>
            
          </div>:
          <div className={"output-value"} style={{color:this.state.values[0]===100?"#31ab2f":"#212121"}} id="output">
            {this.state.values[0]}%
          </div>
        }
        </div>
      );
    }
  }
  
export default RangeSlider;
