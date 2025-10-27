# 🔍 Vercel Environment Variables Check

## The build works locally but fails on Vercel?

This usually means **environment variables are missing** in Vercel.

---

## ✅ Required Environment Variables

Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Make sure these are set for **Production**:

### 1. Paystack Key
```
Name: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
Value: pk_test_573f55ec926ffe2953741d0e71614fc17768ddc5
Environment: Production ✓
```

### 2. Resend API Key
```
Name: RESEND_API_KEY
Value: re_2EzZ3Lcn_3YB3Nxb3DDfBNCgoJShM6RAv
Environment: Production ✓
```

### 3. Notification Email
```
Name: NOTIFICATION_EMAIL
Value: striveghana1@gmail.com
Environment: Production ✓
```

---

## 🚨 Common Issues

### Issue 1: Variables Not Set for Production
- Variables might be set for "Preview" but not "Production"
- **Solution**: Make sure to check "Production" when adding variables

### Issue 2: Variables Added After Deployment
- If you add variables after deploying, you need to redeploy
- **Solution**: After adding variables, click "Redeploy"

### Issue 3: Typo in Variable Names
- Variable names must match exactly (case-sensitive)
- **Solution**: Double-check spelling

---

## 🔄 After Adding Variables

1. **Save** all environment variables
2. Go to **Deployments** tab
3. Click **"Redeploy"** on the latest deployment
4. Wait 2-3 minutes

---

## 📸 What to Check

Can you send me a screenshot of:
1. The **error message** from Vercel deployment logs
2. Your **Environment Variables** page in Vercel settings

This will help me see exactly what's wrong!

---

## 🎯 Quick Test

The build works **100% locally**, which means:
- ✅ Code is correct
- ✅ No syntax errors
- ✅ All dependencies installed
- ❌ Something is different in Vercel environment

Most likely: **Missing environment variables**
