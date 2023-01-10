
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
      companyURL: "https://www.bfh.ch",
      url: "mailto:benedikt.hitz@bfh.ch",
    },
    {
      name: "Michael Luggen",
      company: "Bern University of Applied Sciences (BFH)",
      companyURL: "https://www.bfh.ch",
      url: "mailto:michael.luggen@bfh.ch"
    },
    {
      name: "Jean-Luc Cochard",
      company: "Swiss Federal Archives (SFA)",
      companyURL: "https://www.bar.admin.ch",
      url: "mailto:jean-luc.cochard@bar.admin.ch"
    }]
  };

module.exports = respecConfig
