import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col} from 'react-bootstrap';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel className="carousel-fade" version={4}>
                {this.props.movies.map((movies,index)=>{
                
                    return(<div style={{height: "20%"}} key={index}>
                        <a href={"#movie"+index}>
                    <img
                      style={{ width: "100%", height: "20%" }}
                      src={"https://www.themoviedb.org/t/p/original"+movies.backdrop_path}
                      alt={movies.title}
                    />
                    </a>
                    <div className="carousel-caption">{movies.title}</div>
                  </div>
                    )
                })}
            
              
              
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousel