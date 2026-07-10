(function () {
  const engine00Course = window.JapaneseMastery?.courses?.engine00;
  const courseSummaries = [
    {
      id: engine00Course?.id || "engine-00",
      title: engine00Course?.title || "00 Japanese Engine",
      subtitle: engine00Course?.subtitle || "Bootloader-style Japanese foundation",
      sequence: engine00Course?.sequence || 0,
      status: engine00Course?.status || "available",
    },
    { id: "n5", title: "N5", subtitle: "JLPT beginner module", sequence: 1, status: "planned" },
    { id: "n4", title: "N4", subtitle: "JLPT upper-beginner module", sequence: 2, status: "planned" },
    { id: "n3", title: "N3", subtitle: "JLPT intermediate module", sequence: 3, status: "planned" },
    { id: "professional", title: "Professional Japanese", subtitle: "Workplace and regulated-domain Japanese", sequence: 4, status: "planned" },
    { id: "n2", title: "N2", subtitle: "JLPT advanced module", sequence: 5, status: "planned" },
    { id: "n1", title: "N1", subtitle: "JLPT highest-level module", sequence: 6, status: "planned" },
  ];

  window.JapaneseMastery = window.JapaneseMastery || {};
  window.JapaneseMastery.courseRegistry = {
    listCourses() {
      return courseSummaries.map((course) => ({ ...course }));
    },
    getCourseSummary(courseId) {
      return courseSummaries.find((course) => course.id === courseId) || null;
    },
    getCourse(courseId) {
      if (courseId === engine00Course?.id) return engine00Course;
      return null;
    },
  };
})();
