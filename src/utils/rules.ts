export default {
  requried(s: string) {
    return typeof s === "string" && s.replace(/\s/g, "").length
      ? true
      : "requried";
  },
  email(s: string) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(s).toLowerCase()) || "not a valid email";
  }
};
