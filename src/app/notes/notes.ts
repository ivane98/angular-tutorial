import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-notes",
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: "./notes.html",
  styleUrl: "./notes.css",
})
export class Notes implements OnInit {
  title = "Notes";

  notes: string[] = [];
  editedIndex: number | null = null;
  editedText: string = "";

  ngOnInit(): void {
    this.loadNotes();
  }

  addNote(note: string) {
    if (!note.trim()) return;

    this.notes.push(note);
    this.saveNotes();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  startEdit(index: number) {
    this.editedIndex = index;
    this.editedText = this.notes[index];
  }

  saveEdit() {
    if (this.editedIndex === null) return;

    const trimmed = this.editedText.trim();
    if (!trimmed) return;

    this.notes[this.editedIndex] = trimmed;
    this.editedIndex = null;
    this.editedText = "";
    this.saveNotes();
  }

  cancelEdit() {
    this.editedIndex = null;
    this.editedText = "";
  }
  loadNotes() {
    const stored = localStorage.getItem("notes");
    this.notes = stored ? JSON.parse(stored) : [];
  }

  saveNotes() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
