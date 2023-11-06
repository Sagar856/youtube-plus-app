import { Component } from 'react';
import TrendingVideo from '../../pages/HomePage/TrendingVideo/TrendingVideo';

// Class component is also known as containers /smart component /stateful comp
class TrendingVideoList extends Component {
  // state is place for keeping component wide data
  state = {
    videoResolution: '4K',
    videos: [
      {
        id: '535423544453',
        title: 'Planet Earth II',
        description:
          'Planet Earth II is a 2016 British nature  by the BBC as a sequel to Planet Earth',
        thumbnailUrl:
          'https://i.ytimg.com/vi/cTQ3Ko9ZKg8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDyCB0h6VY6x4p3DQ6TMZivZfpGiw',
        channel: 'BBC Earth',
        views: '10M',
        publishedDate: '1 month ago'
      },
      {
        id: '89678976897',
        title: 'Man Vs Wild',
        description: 'A Wild Adventure show hosted by Bear Grylls on Discovery Channel India',
        thumbnailUrl:
          'https://i.ytimg.com/vi/pQR8fbL76Eo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDfJOvQvCFfid9yo7zMlnn5lUN2Bw',
        channel: 'Discovery Channel',
        views: '9M',
        publishedDate: '3 weeks ago'
      },
      {
        id: '237529570293',
        title: 'Football Highlights',
        description:
          'Pro Football Highlights, also known as Football News, Football Time for Football,',
        thumbnailUrl:
          'https://i.ytimg.com/vi/J3jB4CS0x34/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCEP_X4CWLdrhnFvUgZs_0zlxtWKQ',
        channel: 'FIFA',
        views: '1M',
        publishedDate: '8 weeks ago'
      },
      {
        id: '372958327658',
        title: 'Bollywood Music-Remix',
        description:
          'Music is generally defined as the art of arranging some combination of form, harmony',
        thumbnailUrl:
          '	https://i.ytimg.com/vi/fdubeMFwuGs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBXJMQewujDf1BeX-FeiQYA12Xaiw',
        channel: 'Music Beats',
        views: '19M',
        publishedDate: '2 month ago'
      }
    ]
  };

  // event handler method
  handleSwitchResolution = () => {
    // within arrow fn -- this keyword will be available
    console.log('Clicked');
    console.log(this);
    // Do not mutate state directly. Use setState().
    this.setState({
      videoResolution: '8K'
    });
    // whenever setState is called -- render() will be executed
    // setState will smartly merge the change with existing properties
  };

  // class must have render() method
  render() {
    //It must return JSX
    return (
      <div className="row">
        <p>
          Enjoy the trending videos in stunning {this.state.videoResolution} Resolution.
          <button className="btn btn-primary ms-2" onClick={this.handleSwitchResolution}>
            Switch to 8K
          </button>
        </p>
        <div className="col-md-3">
          <TrendingVideo {...this.state.videos[0]}></TrendingVideo>
        </div>
        <div className="col-md-3">
          <TrendingVideo {...this.state.videos[1]}></TrendingVideo>
        </div>
        <div className="col-md-3">
          <TrendingVideo {...this.state.videos[2]}></TrendingVideo>
        </div>
        <div className="col-md-3">
          <TrendingVideo {...this.state.videos[3]}></TrendingVideo>
        </div>
      </div>
    );
  }
}

export default TrendingVideoList;
