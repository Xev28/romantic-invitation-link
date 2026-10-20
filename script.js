
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeqoeqv";

sendReplyBtn.addEventListener("click", async () => {
  const message = replyText.value.trim();

  if (!message) {
    replyStatus.textContent = "Please write a reply first. 💌";
    return;
  }

  sendReplyBtn.disabled = true;
  sendReplyBtn.textContent = "Sending...";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        message: message,
        _subject: "A reply to your apology letter",
        sender: "Rheyn"
      })
    });

    if (!response.ok) {
      throw new Error("Your reply could not be sent.");
    }

    replyStatus.textContent =
      "Your reply has been sent successfully. Thank you for sharing. ❤️";

    replyText.value = "";

    quickReplyButtons.forEach((button) => {
      button.classList.remove("selected");
    });

    updateCharacterCount();

  } catch (error) {
    replyStatus.textContent =
      "Sorry, the reply could not be sent. Please try again.";

    console.error(error);

  } finally {
    sendReplyBtn.disabled = false;
    sendReplyBtn.textContent = "Send Reply 💌";
  }
  
const backTop = document.getElementById("backTop");

if (backTop) {
  backTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

});
