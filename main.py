def should_serve_customer(customer_age, on_break, time):
    if(customer_age < 21):
        return False
    if(time < 5 or time > 10):
        return False
    if (on_break == True):
        return False
    return True

serve = should_serve_customer(21, False, 9)

print(serve)