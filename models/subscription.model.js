import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },

    price: {
        type: Number,
        required: [true, 'Subscription Price is required!'],
        min: [0, 'Price must be greater than 0']
    },

    currency: {
        type: String,
        enum: ['INR', 'USD', 'EUR'],
        default: 'INR'
    },

    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },

    category: {
        type: String,
        enum: ['sports', 'news', 'finance'],
        required: true,
    },

    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },

    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },

    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Start Date must be in the past'
        }
    },

    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value > this.startDate;
            },
            message: 'Renewal Date must be after Start Date'
        }
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });

// Auto-calculate renewal date
subscriptionSchema.pre('save', function (next) {  // ✅ Corrected Hook
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,      // ✅ Fixed Typo
            monthly: 30,
            yearly: 365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    // Auto-update status
    if (this.renewalDate < new Date()) {
        this.status = 'expired';
    }

    next();
});

// ✅ Correct Export
const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
