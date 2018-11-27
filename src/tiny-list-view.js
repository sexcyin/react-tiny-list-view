import React, { Component } from "react";

function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return Number(obj.currentStyle[attr].replace("px",""));
  }
  else {
    return Number(document.defaultView.getComputedStyle(obj, null)[attr].replace("px",""));
  }
}  
export default class ReactTinyListView extends Component {
  state = {
    maxIndex: 100
  };
  componentDidMount() {
    document.addEventListener("scroll", this.scrollHandler);
  }
  prevScrollTop = 0;
  prevTopDivHeight = 0;
  prevFootDivHeight = 0;
  itemHeight = 0;
  scrollHandler = () => {
    const { pageSize, maxRenderCount } = this.props;
    const { maxIndex } = this.state;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动的高度
    let scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight || document.documentElement.offsetHeight; // 文档的总高度
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 浏览器视口的高度
    let topDivHeight = document.getElementById('tiny-list-top').offsetHeight;
    let footDivHeight = document.getElementById('tiny-list-foot').offsetHeight;
    let item = document.getElementsByClassName('tiny-list-view')[0].children[0]
    if (!this.itemHeight && item) {
      this.itemHeight = getStyle(item,'marginTop') + getStyle(item,'borderTopWidth') + getStyle(item,'height') + getStyle(item,'borderBottomWidth') + getStyle(item,'marginBottom');
    }
    let itemHeight = this.itemHeight;
    let max = Math.ceil(scrollHeight / itemHeight);
    if (scrollTop > this.prevScrollTop) {
      console.log('向下');
      if (footDivHeight > 0 && scrollHeight - footDivHeight - scrollTop <= clientHeight) {
        console.log('快到footdiv了');
        this.setState({
          maxIndex: maxIndex + pageSize
        });
        this.prevTopDivHeight  = this.prevTopDivHeight + pageSize * itemHeight;
        document.getElementById("tiny-list-top").style.height = this.prevTopDivHeight + "px";
        this.prevFootDivHeight = this.prevFootDivHeight - pageSize * itemHeight;
        document.getElementById("tiny-list-foot").style.height = this.prevFootDivHeight + "px";
        console.log(this.prevFootDivHeight,this.prevTopDivHeight,'down')
      }
    } else {
      console.log('向上');
      if (topDivHeight > 0 && scrollTop - topDivHeight <= clientHeight) {
        console.log('快到topdiv了');
        this.setState({
          maxIndex: maxIndex - pageSize
        });
        this.prevTopDivHeight  = this.prevTopDivHeight - pageSize * itemHeight;
        document.getElementById("tiny-list-top").style.height = this.prevTopDivHeight + "px";
        this.prevFootDivHeight = this.prevFootDivHeight + pageSize * itemHeight;
        document.getElementById("tiny-list-foot").style.height = this.prevFootDivHeight + "px";
        console.log(this.prevFootDivHeight,this.prevTopDivHeight,'up')
      }
    }
    this.prevScrollTop = scrollTop;
    if (scrollTop + clientHeight === scrollHeight) {
      console.log("滚动到底了");
      if (max >= maxIndex) {
        this.props.onEndReached();
        this.setState({
          maxIndex: maxIndex + pageSize
        });
        this.prevTopDivHeight = (maxIndex - maxRenderCount + pageSize) * itemHeight;
        document.getElementById("tiny-list-top").style.height = this.prevTopDivHeight + "px";
      } else {
        this.props.onEndReached();
      }
    }
  };
  getListData() {
    const { dataSource, maxRenderCount } = this.props;
    const { maxIndex } = this.state;
    let list = [];
    console.log(maxIndex, "maxindex");
    for (let i = maxIndex - maxRenderCount; i < maxIndex; i++) {
      if (dataSource[i]) list.push(dataSource[i]);
    }
    console.log(list)
    return list;
  }
  render() {
    const { renderRow, maxRenderCount, renderFooter } = this.props;
    const { maxIndex } = this.state;
    return (
      <div>
        <div id="tiny-list-top"/>
        <div className="tiny-list-view">
          {
            this.getListData().map((item,index) => (
              renderRow(item, maxIndex - maxRenderCount + index)
            ))
          }
        </div>
        {renderFooter()}
        <div id="tiny-list-foot"/>
      </div>
    );
  }
}
