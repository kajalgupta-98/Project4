import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineLink } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../recoil/atoms/Atoms";

export default function SideDialog({ open, setOpen }) {
  const darkModeOn = useRecoilValue(darkMode);
  const [newMember, setNewMember] = useState("");
  const [members, setMembers] = useState([
    "Chand babu",
    "Ruturaj Mengal",
    "Kajal gupta",
    "Rohit kirti",
  ]);
  const [showMembers, setShowMembers] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  function handleClose() {
    setOpen(false);
    setUrl("");
    setCopied(false);
    setShowMembers(false);
  }

  function handleAddMember() {
    if (!newMember) {
      return;
    }
    setMembers([...members, newMember]);
    setNewMember("");
  }

  function handleShowMemebers() {
    setShowMembers(!showMembers);
  }
  function handleCreateLink() {
    const myUrl = window.location.href;
    setUrl(myUrl);
  }
  function handleCopyLink() {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  }
  function removeMember(index) {
    const arr = [...members];
    arr.splice(index, 1);
    setMembers(arr);
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={darkModeOn ? { backgroundColor: "black", color: "white" } : null}
        >
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            Add Members
            <p onClick={handleClose} style={{ cursor: "pointer" }}>
              <RxCrossCircled />
            </p>
          </span>
        </DialogTitle>
        <DialogContent
          sx={
            darkModeOn
              ? { backgroundColor: "black", color: "white" }
              : { marginTop: "1rem" }
          }
        >
          <div>
            <input
              style={{ height: "2.3rem", padding: "0.5rem", outline: "none" }}
              placeholder="Add new members"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleAddMember}
              sx={{ marginLeft: "1rem", width: "5rem" }}
            >
              Add
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            <p style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <AiOutlineLink size={20} /> Invite someone to this workspace with
              a link
            </p>
            <Button onClick={handleCreateLink}>
              <u>Create Link</u>
            </Button>
          </div>

          {url && (
            <>
              <a
                style={{
                  color: "blue",
                  marginTop: "0.5rem",
                  marginRight: "4rem",
                }}
              >
                {url}
              </a>{" "}
              <Button onClick={handleCopyLink}>copy link</Button>
            </>
          )}
          <br />
          {copied && <span>Link copied to clipboard!</span>}
          <br />
          <Button
            variant="contained"
            onClick={handleShowMemebers}
            sx={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            {showMembers ? "Hide Members" : "Show Members"}
          </Button>

          {showMembers
            ? members.map((ele, index) => (
                <ul
                  style={{ marginTop: "0.5rem", marginLeft: "1rem" }}
                  key={index}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <li key={index}>{ele} </li>
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                      onClick={() => removeMember(index)}
                    >
                      Remove
                    </p>
                  </div>
                </ul>
              ))
            : ""}
        </DialogContent>
      </Dialog>
    </>
  );
}
