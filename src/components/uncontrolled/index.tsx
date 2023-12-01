export const UncontrolledForm = () => (
  <form>
    <fieldset>
      <legend>Super Name</legend>
      <label htmlFor="name">
        Name
        <input id="name" type="text" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Super Age</legend>
      <label htmlFor="age">
        Age
        <input id="age" type="number" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Super Email</legend>
      <label htmlFor="email">
        Email
        <input type="text" id="email" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Super Password</legend>
      <label htmlFor="password">
        Password
        <input type="password" id="password" />
      </label>
      <label htmlFor="repeat">
        Repeat Password
        <input type="password" id="repeat" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Super Gender</legend>
      <label htmlFor="male">
        male
        <input type="radio" id="male" name="gender" />
      </label>
      <label htmlFor="female">
        female
        <input type="radio" id="female" name="gender" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Super Agree</legend>
      <label htmlFor="agree">
        Agree
        <input type="checkbox" id="agree" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Super Load</legend>
      <label htmlFor="file">
        Load
        <input type="file" id="file" />
      </label>
    </fieldset>
    <fieldset>
      <legend>Change Country</legend>
      <label htmlFor="country">
        Country
        <input type="file" id="country" />
      </label>
    </fieldset>
    <button type="submit">Submit</button>
  </form>
);
