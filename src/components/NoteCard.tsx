import type { Note } from "@prisma/client"
import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

interface NoteCardProps {
  note: Note
  onDelete: () => void
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <div className="shdaow-xl card mt-5 border border-gray-200 bg-base-100">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
