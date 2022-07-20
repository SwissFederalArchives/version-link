
var respecConfig = {
    specStatus: "unofficial",
    shortName: 'version-link',
    edDraftURI: "https://version.link/",
    latestVersion: null,
    maxTocLevel: 4,
    postProcess: [jumpTo],
    github: {
      repoURL: "https://github.com/SwissFederalArchives/version-link",
      branch: "main", // alternative branch
    },
    editors: [{
      name: "Benedikt Hitz-Gamper",
      url: "https://www.bfh.ch",
    },
    {
      name: "Michael Luggen",
      url: "https://www.bfh.ch",
    }]
  };

module.exports = respecConfig
