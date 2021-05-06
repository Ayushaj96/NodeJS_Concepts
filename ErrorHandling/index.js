const sendRequest = function () {
  const smsRes = { success: false };

  if (!smsRes || smsRes.success !== true) {
    throw "Failed to send SMS";
  }
};

function check() {
  try {
    sendRequest();
  } catch (error) {
    let Comment;
    if (typeof error === "string") {
      Comment = error;
    }
    return { Comment };
  }
}

console.log(check());
