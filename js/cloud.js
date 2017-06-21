var word_list = [
    {text: "售后服务", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud"},
    {text: "以旧换新", weight: 10.5, html: {title: "My Title", "class": "custom-class"}, link: {href: "http://jquery.com/", target: "_blank"}},
    {text: "送货速度", weight: 9.4},
    {text: "潮流", weight: 8},
    {text: "时尚", weight: 6.2},
    {text: "耐用", weight: 5},
    {text: "喜爱", weight: 5},
];
  $(function() {
    $(".cloud--comment").jQCloud(word_list);
  });