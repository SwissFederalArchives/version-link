
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
      company: "Bern University of Applied Sciences (BFH)",
      companyURL: "https://www.bfh.ch/",
      url: "https://www.linkedin.com/in/benedikt-hitz-gamper-331756209/",
      orcid: "0000-0001-7937-0159",
    },
    {
      name: "Michael Luggen",
      company: "Bern University of Applied Sciences (BFH)",
      companyUrl: "https://www.bfh.ch",
    }]
  };

module.exports = respecConfig
