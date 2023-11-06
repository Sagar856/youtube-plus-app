import React, { Component } from 'react';
import RecommendedVideo from '../../pages/HomePage/RecommendedVideo/RecommendedVideo';

class RecommendedVideoList extends Component {
  constructor() {
    super(); // must call super method in derived class's constructor to access 'this' keyword

    //comp-wide data
    this.state = {
      videos: [
        {
          id: '283904328974',
          title: 'How does mouse knows when you move it|',
          description: 'How does mouse knows when you move it, Know more about mouse functioning',
          thumbnailUrl:
            'https://i.ytimg.com/vi/SAaESb4wTCM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAzcFshyv2dXNaVdgzh67FJ3jC1NA',
          channel: 'Branch Education',
          views: '4.2M',
          publishedDate: '1 year ago',
          isInWatchlist: false
        },
        {
          id: '82364278346',
          title: 'The insane Engineering of the GEnX',
          description: 'The insane Engineering of the GEnX| Know more about the GEnX working',
          thumbnailUrl:
            'https://i.ytimg.com/vi/Sf6H8kSunRA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCjzybIFkgxt1qzgSGugeN2yqR6kQ',
          channel: 'Engineering',
          views: '3.8M',
          publishedDate: '1 year ago',
          isInWatchlist: false
        },
        {
          id: '2983498247',
          title: 'Pirates of the Caribbean Remix [BASSBOOSTED]',
          description: 'Pirates of the Caribbean Remix [BASSBOOSTED] Music version, Use headphones',
          thumbnailUrl:
            '	https://i.ytimg.com/vi/dNCzdvzIiHM/hq720.jpg?sqp=-…RhlIGIoRjAP&rs=AOn4CLCI286f-akgUi5SncKotPs_p03Bpw',
          channel: 'NT Creation',
          views: '4.4K',
          publishedDate: '9 weeks ago',
          isInWatchlist: true
        },
        {
          id: '827492479',
          title: 'What if We Become a Type 7 Civilization?',
          description:
            'What if We Become a Type 7 Civilization| know detail about type 7 civiliazation',
          thumbnailUrl:
            '	https://i.ytimg.com/vi/D0DgjleC-Og/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDFyVqj2Y6YBqEm-4E_jvwundf5mw',
          channel: 'RIDDLE',
          views: '1.7M',
          publishedDate: '3 months ago',
          isInWatchlist: false
        }
      ]
    };
  }

  // add the event handler
  handleAddToWatchlist = (index) => {
    console.log(this);
    console.log(index);

    // working with state immutably
    let duplicateVideos = [...this.state.videos];
    duplicateVideos[index].isInWatchlist = !duplicateVideos[index].isInWatchlist;
    console.log(duplicateVideos);
    this.setState({
      videos: duplicateVideos
    });
  };

  render() {
    // never event use setState here---(act like stack overflow)
    // conditional rendering
    if (!Array.isArray(this.state.videos) || this.state.videos.length === 0) {
      return (
        <div className="alert alert-warning">
          Sorry! No Recommended Videos Found. Try watching more videos.
        </div>
      );
    }

    // all component transformation can be done here
    // loop-thru
    // if it is an array and has length > 0
    let videoList = null;
    if (Array.isArray(this.state.videos) && this.state.videos.length > 0) {
      videoList = this.state.videos.map((video, index) => {
        // console.log(video);
        return (
          <RecommendedVideo
            {...video}
            index={index}
            key={video.id}
            handleAddToWatchlist={this.handleAddToWatchlist}></RecommendedVideo>
        );
      });
    }

    return <div className="row">{videoList}</div>;
  }
}

export default RecommendedVideoList;
