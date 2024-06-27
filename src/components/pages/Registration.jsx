

const Registration = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Реєстрація
              </div>
              <div className="card-body">
                <form id="registrationForm d-flex flex-column gap-3">
                  <div className="form-group">
                    <label htmlFor="username">Імя користувача</label>
                    <input type="text" className="form-control" id="username" name="username" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Електронна пошта</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Підтвердження пароля</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                  </div>
                  <button type="submit" className="btn btn-primary">Зареєструватися</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
 
export default Registration;