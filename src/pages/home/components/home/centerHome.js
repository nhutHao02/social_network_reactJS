import React, { useState, useEffect } from "react";
import "./centerHome.css";
import perform from "../../../../service/Service";
import ENDPOINTS from "../../../../service/API";
import { ResponseCode } from "../../../../service/Code";
import TweetCard from "./components/tweetCard";

export default function CenterHome() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = await perform(ENDPOINTS.TWEETS.GET_TWEETS, {
          page: 0,
          limit: 10,
        });
        if (response.code == ResponseCode.OK) {
          setTweets(response.data);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home_center">
      {/* bar */}
      <div className=""></div>
      {tweets && tweets.length > 0 ? (
        tweets.map((tweet, index) => (
          <TweetCard
            key={index}
            props={{
              urlAvt: tweet.user.urlAvt,
              fullName: tweet.user.fullName,
              urlImage: tweet.urlImage,
              urlVideo: tweet.urlVideo,
              loves: tweet.totalLove,
              comments: tweet.totalComment,
              reposts: tweet.totalRepost,
              saves: tweet.totalSaved,
              content: tweet.content,
              timestamp: tweet.createAt,
            }}
          />
        ))
      ) : (
        <p>No tweets available</p>
      )}
    </div>
  );
}
