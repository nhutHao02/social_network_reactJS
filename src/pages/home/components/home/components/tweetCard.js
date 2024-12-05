import React, { useEffect, useState } from "react";
import perform from "../../../../../service/Service";
import ENDPOINTS from "../../../../../service/API";
import { ResponseCode } from "../../../../../service/Code";

export default function TweetCard({ props }) {
  const [tweet, setTweet] = useState(props);
  const [loved, setLoved] = useState(false);

  useEffect(() => {
    const checkIfLoved = async () => {
      try {
        if (!tweet.id) return;
        var response = await perform(ENDPOINTS.TWEETS.IS_LOVE_TWEET, {
          'userName':localStorage.getItem("user"),
          'tweetID': tweet.id
        });
        if (response.code == ResponseCode.OK) {
          setLoved(response.data)
        } 
      } catch (error) {
        console.error("Error check loved tweet data:", error);
      }
    }
    checkIfLoved()
  }, []);

  function formatTimeFromNow(dateString) {
    const inputDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - inputDate;

    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds <= 30) {
      return "1m";
    } else if (diffInSeconds < 60) {
      return `${diffInSeconds}s`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h`;
    } else {
      const day = inputDate.getDate().toString().padStart(2, "0");
      const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
      const year = inputDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  async function loveTweet() {
    try {
      var response = await perform(ENDPOINTS.TWEETS.LOVE_TWEET_BY_USERID, {
        'userName':localStorage.getItem("user"),
        'tweetID': tweet.id
      });
      if (response.code == ResponseCode.OK) {
        setLoved(true);
        setTweet(prevTweet => ({
          ...prevTweet,
          loves: prevTweet.loves + 1
        }));
      } 
    } catch (error) {
      console.error("Error check loved tweet data:", error);
    }
  }

  async function unLoveTweet() {
    try {
      var response = await perform(ENDPOINTS.TWEETS.UNLOVE_TWEET_BY_USERID, {
        'userName':localStorage.getItem("user"),
        'tweetID': tweet.id
      });
      if (response.code == ResponseCode.OK) {
        setLoved(false);
        setTweet(prevTweet => ({
          ...prevTweet,
          loves: prevTweet.loves - 1
        }));
      } 
    } catch (error) {
      console.error("Error check loved tweet data:", error);
    }
  }

  function handleLoveClick() {
    !loved ? loveTweet() : unLoveTweet()
  }

  return (
    <div className="border-t-[1px] border-gray-300">
      <div className="p-2">
        {/* top */}
        <div className="flex justify-between p-2">
          <div className="flex space-x-2">
            <img
              className="object-cover rounded-full h-12 w-12 items-center"
              src={tweet.urlAvt}
            />
            <div>
              <div className="flex">
                <p className="font-semibold text-black">{tweet.fullName}</p>
                <p className="text-gray-400 font-light pl-1 text-sm pt-[3px]">
                  {" "}
                  • {formatTimeFromNow(tweet.timestamp)}
                </p>
              </div>
              <h3 className="text-gray-400 font-light">@abcsdf</h3>
              <div>
                <p className="text-black">{tweet.content}</p>
              </div>
            </div>
          </div>
          <div className="text-gray-500">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
        </div>

        {/* image-video */}
        <img
          className="object-cover rounded-2xl h-96 w-full items-center pl-16 pr-5"
          src={tweet.urlImage}
        />

        <div className="flex justify-between py-1 pl-16 pr-5 text-lg">
          <div className="flex justify-center items-center space-x-1">
            <ion-icon name={loved ? "heart" : "heart-outline"} onClick={handleLoveClick}></ion-icon>
            <p className="w-6 text-left">{tweet.loves}</p>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            <p className="w-6 text-left">{tweet.comments}</p>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <ion-icon name="git-compare-outline"></ion-icon>
            <p className="w-6 text-left">{tweet.reposts}</p>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <ion-icon name="bookmark-outline"></ion-icon>
            <p className="w-6 text-left">{tweet.saves}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
