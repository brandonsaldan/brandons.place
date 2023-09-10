"use client";

import { useLanyardWS } from "use-lanyard";

const Status = () => {
  const data = useLanyardWS("261953350860275713");
  const listening = data?.spotify || null;
  const coding = data?.activities.find(
    (a) => a.application_id === "810516608442695700"
  ) || null;

  if (coding) {
    var unformattedCodeImage = coding.assets.large_image;
    var codeImage = unformattedCodeImage.substring(unformattedCodeImage.indexOf("https")).replace("https/", "https://");
    console.log(codeImage);
  } else {
    var codeImage = '/assets/idle-vscode.webp';
  }

  const renderCodingContent = () => {
    return (
      <div className="relative flex items-center space-x-3 rounded-lg border border-zinc-300 dark:border-zinc-300/20 bg-white dark:bg-zinc-900 px-6 py-5 focus-within:ring-0 focus-within:ring-offset-0 hover:border-zinc-400 dark:hover:border-zinc-200 transition ease-in-out duration-150">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-lg" src={codeImage} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <a href="https://github.com/brandonsaldan" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {renderCodingStatusText()}
            {renderCodingDetails()}
          </a>
        </div>
      </div>
    );
  };

  if (listening) {
    var trackLink = `https://open.spotify.com/track/${listening.track_id}`
    var artLink = listening.album_art_url
  } else {
    var trackLink = '#'
    var artLink = '/assets/idle-spotify.webp'
  }

  const renderListeningContent = () => {
    return (
      <div className="relative flex items-center space-x-3 rounded-lg border border-zinc-300 dark:border-zinc-300/20 bg-white dark:bg-zinc-900 px-6 py-5 focus-within:ring-0 focus-within:ring-offset-0 hover:border-zinc-400 dark:hover:border-zinc-200 transition ease-in-out duration-150">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-lg" src={artLink} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <a href={trackLink} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {renderListeningStatusText()}
            {renderListeningDetails()}
          </a>
        </div>
      </div>
    );
  };

  const renderCodingStatusText = () => {
    if (coding) {
      return (
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Editing <a className="text-sm font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200 truncate">{coding.state?.replace("Editing", "")}</a>
        </p>
      );
    } else {
      return (
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Idling
        </p>
      );
    }
  };

  const renderListeningStatusText = () => {
    if (listening) {
      return (
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">
          Listening to <a className="text-sm font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">{listening.song}</a>
        </p>
      );
    } else {
      return (
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Not Listening
        </p>
      );
    }
  };

  const renderCodingDetails = () => {
    if (coding) {
      return (
        <p className="truncate text-sm text-zinc-500 dark:text-zinc-200">in <a className="text-sm font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">Visual Studio Code</a></p>
      );
    } else {
      return (
        <p className="truncate text-sm text-zinc-500 dark:text-zinc-200">Visual Studio Code</p>
      )
    }
  };

  const renderListeningDetails = () => {
    if (listening) {
      return (
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">
          by <a className="font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">{listening.artist}</a>
        </p>
      );
    } else {
      return (
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Spotify
        </p>
      )
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 mt-8 mb-10 sm:mb-0 sm:grid sm:grid-cols-2 sm:gap-4">
      {renderCodingContent()}
      {renderListeningContent()}
    </div>
  );
};

export default Status;