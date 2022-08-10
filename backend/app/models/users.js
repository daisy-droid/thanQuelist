

    const userSchema = new Schema ({
        username: {
          type: String,
          min: [4, 'Too short, min 4 characters are required'],
          max: [32, 'Too long, max 16 characters are required']
        },
        email: {
          type: String,
          min: [4, 'Too short, min 4 characters are required'],
          max: [32, 'Too long, max 16 characters are required'],
          lowercase: true,
          unique: true,
          required: 'Email is required',
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        password: {
          type: String,
          min: [4, 'Too short, min 4 characters are required'],
          max: [32, 'Too long, max 16 characters are required'],
          required: 'password is required'
        }

    });

    module.exports =userSchema