<template>
  <table>
    <thead>
      <tr>
        Name:<br />
        <input type="text" name="name" /><br />

        <textarea placeholder="Summary your day!" rows="5"></textarea>
        <br />
        How do you rate your day?<br />
        <i>(1 = Warum bin ich aufgestanden?, 5 = überragend)</i>
        <br />
        <input
          type="radio"
          name="note_inhalt"
          value="Warum bin ich aufgestanden?"
        />
        1 |
        <input type="radio" name="note_inhalt" value="Oh je!" />
        2 |
        <input type="radio" name="note_inhalt" value="Ganz OK!" />
        3 |
        <input type="radio" name="note_inhalt" value="Lief nach Plan" />
        4 |
        <input type="radio" name="note_inhalt" value="Überragend!" />
        5 |
        <br />

        <textarea placeholder="ROTI-Summary!" rows="5"></textarea>
        <br />
      </tr>
    </thead>
  </table>
</template>
