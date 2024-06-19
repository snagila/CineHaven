import React from "react";
import "./scrollableTable.css";

const ScrollTable = () => {
  return (
    <>
      <div className="scrollTable">
        <h2>New Release This Week</h2>
        {/* INDIVIDUAL IMAGE SCROLLING */}
        <div class="media-scroller snaps-inline">
          <div class="media-element">
            <img
              src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
              alt=""
            />
            <p class="title">Short title</p>
          </div>
          <div class="media-element">
            <img
              src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
              alt=""
            />
            <p class="title">A longer title here</p>
          </div>
          <div class="media-element">
            <img
              src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
              alt=""
            />
            <p class="title">An even longer title on this one</p>
          </div>
          <div class="media-element">
            <img
              src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
              alt=""
            />
            <p class="title">A dog that's blinking?</p>
          </div>
          <div class="media-element">
            <img
              src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
              alt=""
            />
            <p class="title">Chair</p>
          </div>
          <div class="media-element">
            <img
              src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
              alt=""
            />
            <p class="title">Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollTable;
